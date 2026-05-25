# 使用 NestJS + Drizzle ORM 实现多级导航网站

## 1. 数据结构设计

### category.json
```json
{
  "id": 1,
  "name": "云服务",
  "children": [
    {
      "id": 30,
      "name": "主流云平台"
    },
    {
      "id": 29,
      "name": "站长工具"
    }
  ]
}
```

### site.json
```json
{
  "categoryId": 30,
  "id": 46,
  "desc": "",
  "icon": "https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_dd311b81980d4959a57d59b80bf17737.png",
  "title": "华为云",
  "url": "https://www.huaweicloud.com/"
}
```

### 数据库表结构
```sql
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  parent_id INTEGER REFERENCES categories(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sites (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  url TEXT NOT NULL,
  icon TEXT,
  description TEXT,
  category_id INTEGER NOT NULL REFERENCES categories(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 2. 实体定义

### Category 实体
```ts
// src/categories/category.entity.ts
import { sites, categories } from '@/db/schema';
import { relations } from 'drizzle-orm';
import { InferModel } from 'drizzle-orm';

export type Category = InferModel<typeof categories>;
export type NewCategory = InferModel<typeof categories, 'insert'>;

export const categoryRelations = relations(categories, ({ many, parent }) => ({
  sites: many(sites),
  parent: parent(categories),
  children: many(categories),
}));
```

### Site 实体
```ts
// src/sites/site.entity.ts
import { sites, categories } from '@/db/schema';
import { relations } from 'drizzle-orm';
import { InferModel } from 'drizzle-orm';

export type Site = InferModel<typeof sites>;
export type NewSite = InferModel<typeof sites, 'insert'>;

export const siteRelations = relations(sites, ({ one }) => ({
  category: one(categories, {
    fields: [sites.categoryId],
    references: [categories.id],
  }),
}));
```

## 3. 数据库 Schema 定义

### Drizzle Schema
```ts
// src/db/schema.ts
import { pgTable, serial, text, timestamp, integer } from 'drizzle-orm/pg-core';

export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  parentId: integer('parent_id').references(() => categories.id),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const sites = pgTable('sites', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  url: text('url').notNull(),
  icon: text('icon'),
  description: text('description'),
  categoryId: integer('category_id').references(() => categories.id).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
```

## 4. 核心功能实现

### 分类服务
```ts
// src/categories/categories.service.ts
import { Injectable } from '@nestjs/common';
import { DrizzleService } from '@/drizzle/drizzle.service';
import { categories } from '@/db/schema';
import { eq, sql } from 'drizzle-orm';
import { Category } from './category.entity';

@Injectable()
export class CategoriesService {
  constructor(private readonly drizzleService: DrizzleService) {}

  async findAll(): Promise<Category[]> {
    return this.drizzleService.db.query.categories.findMany({
      with: {
        children: true,
      },
    });
  }

  async findOne(id: number): Promise<Category | undefined> {
    return this.drizzleService.db.query.categories.findFirst({
      where: eq(categories.id, id),
      with: {
        children: true,
        sites: true,
      },
    });
  }

  async create(data: Omit<Category, 'id'>): Promise<Category> {
    const [newCategory] = await this.drizzleService.db
      .insert(categories)
      .values({
        ...data,
        updatedAt: sql`CURRENT_TIMESTAMP`,
      })
      .returning();
    
    return newCategory;
  }

  async update(id: number, data: Partial<Category>): Promise<Category> {
    const [updatedCategory] = await this.drizzleService.db
      .update(categories)
      .set({
        ...data,
        updatedAt: sql`CURRENT_TIMESTAMP`,
      })
      .where(eq(categories.id, id))
      .returning();
    
    return updatedCategory;
  }

  async remove(id: number): Promise<void> {
    await this.drizzleService.db.delete(categories).where(eq(categories.id, id));
  }
}
```

### 站点服务
```ts
// src/sites/sites.service.ts
import { Injectable } from '@nestjs/common';
import { DrizzleService } from '@/drizzle/drizzle.service';
import { sites } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { Site } from './site.entity';

@Injectable()
export class SitesService {
  constructor(private readonly drizzleService: DrizzleService) {}

  async findAll(): Promise<Site[]> {
    return this.drizzleService.db.query.sites.findMany({
      with: {
        category: true,
      },
    });
  }

  async findByCategoryId(categoryId: number): Promise<Site[]> {
    return this.drizzleService.db
      .select()
      .from(sites)
      .innerJoin(categories, eq(sites.categoryId, categories.id))
      .where(eq(sites.categoryId, categoryId));
  }

  async findOne(id: number): Promise<Site | undefined> {
    return this.drizzleService.db.query.sites.findFirst({
      where: eq(sites.id, id),
      with: {
        category: true,
      },
    });
  }

  async create(data: Omit<Site, 'id'>): Promise<Site> {
    const [newSite] = await this.drizzleService.db
      .insert(sites)
      .values({
        ...data,
        updatedAt: sql`CURRENT_TIMESTAMP`,
      })
      .returning();
    
    return newSite;
  }

  async update(id: number, data: Partial<Site>): Promise<Site> {
    const [updatedSite] = await this.drizzleService.db
      .update(sites)
      .set({
        ...data,
        updatedAt: sql`CURRENT_TIMESTAMP`,
      })
      .where(eq(sites.id, id))
      .returning();
    
    return updatedSite;
  }

  async remove(id: number): Promise<void> {
    await this.drizzleService.db.delete(sites).where(eq(sites.id, id));
  }
}
```

## 5. API 接口设计

### 导航数据接口
```ts
// src/nav/nav.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { CategoriesService } from '@/categories/categories.service';
import { SitesService } from '@/sites/sites.service';
import { Category } from '@/categories/category.entity';
import { Site } from '@/sites/site.entity';

@Controller('nav')
export class NavController {
  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly sitesService: SitesService,
  ) {}

  // 获取完整的导航树
  @Get('tree')
  async getNavigationTree() {
    const rootCategories = await this.categoriesService.findAll();
    const allSites = await this.sitesService.findAll();

    // 构建导航树
    return this.buildNavTree(rootCategories, allSites);
  }

  // 根据分类ID获取站点列表
  @Get('category/:id/sites')
  async getSitesByCategoryId(@Param('id') id: string) {
    return this.sitesService.findByCategoryId(Number(id));
  }

  // 构建导航树的私有方法
  private buildNavTree(categories: Category[], allSites: Site[]) {
    const map = new Map<number, any>();
    
    // 初始化所有分类
    categories.forEach(category => {
      map.set(category.id, { 
        ...category, 
        children: [], 
        sites: [] 
      });
    });
    
    // 填充子分类和站点
    categories.forEach(category => {
      if (category.parentId && map.has(category.parentId)) {
        map.get(category.parentId)?.children.push(map.get(category.id));
      }
      
      // 添加站点
      const sites = allSites.filter(site => site.categoryId === category.id);
      map.get(category.id).sites = sites;
    });
    
    // 返回根节点
    return Array.from(map.values()).filter(c => !c.parentId);
  }
}
```

### 数据同步接口（用于初始化数据）
```ts
// src/data/data.controller.ts
import { Controller, Post } from '@nestjs/common';
import { DataSyncService } from '@/data/data.service';

@Controller('data')
export class DataController {
  constructor(private readonly dataSyncService: DataSyncService) {}

  // 同步分类数据
  @Post('sync/categories')
  async syncCategories() {
    await this.dataSyncService.syncCategories();
    return { message: 'Categories synced successfully' };
  }

  // 同步站点数据
  @Post('sync/sites')
  async syncSites() {
    await this.dataSyncService.syncSites();
    return { message: 'Sites synced successfully' };
  }
}
```

## 6. 数据同步服务

### 数据同步逻辑
```ts
// src/data/data.service.ts
import { Injectable } from '@nestjs/common';
import { DrizzleService } from '@/drizzle/drizzle.service';
import { categories } from '@/db/schema';
import { sites } from '@/db/schema';
import { join } from 'path';
import { readJSONFile } from '@/utils/file.util';

@Injectable()
export class DataSyncService {
  constructor(private readonly drizzleService: DrizzleService) {}

  // 同步分类数据
  async syncCategories() {
    const categoryData = await readJSONFile(join(__dirname, '../../data/category.json'));
    await this.importCategories(categoryData);
  }

  // 递归导入分类
  private async importCategories(categoriesData: any[], parentId: number | null = null) {
    for (const category of categoriesData) {
      const [existing] = await this.drizzleService.db
        .select()
        .from(categories)
        .where(eq(categories.id, category.id));
        
      if (!existing) {
        const [newCategory] = await this.drizzleService.db
          .insert(categories)
          .values({
            id: category.id,
            name: category.name,
            parentId: parentId,
          })
          .returning();
          
        if (category.children && category.children.length > 0) {
          await this.importCategories(category.children, newCategory.id);
        }
      } else if (category.children && category.children.length > 0) {
        await this.importCategories(category.children, existing.id);
      }
    }
  }

  // 同步站点数据
  async syncSites() {
    const siteData = await readJSONFile(join(__dirname, '../../data/site.json'));
    
    for (const site of siteData) {
      const [existing] = await this.drizzleService.db
        .select()
        .from(sites)
        .where(eq(sites.id, site.id));
        
      if (!existing) {
        await this.drizzleService.db.insert(sites).values({
          id: site.id,
          title: site.title,
          url: site.url,
          icon: site.icon,
          description: site.desc || '',
          categoryId: site.categoryId || site.category_id,
        });
      }
    }
  }
}
```

## 7. 查询优化策略

### 优化查询性能
```ts
// src/nav/nav.service.ts
import { Injectable } from '@nestjs/common';
import { DrizzleService } from '@/drizzle/drizzle.service';
import { categories, sites } from '@/db/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class NavService {
  constructor(private readonly drizzleService: DrizzleService) {}

  // 获取完整的导航树（带缓存优化）
  async getNavigationTreeWithOptimization() {
    // 一次性查询所有数据
    const [allCategories, allSites] = await Promise.all([
      this.drizzleService.db.select().from(categories),
      this.drizzleService.db.select().from(sites).leftJoin(categories, eq(sites.categoryId, categories.id)),
    ]);

    // 构建内存中的映射关系
    const categoryMap = new Map(allCategories.map(c => [c.id, c]));
    const siteMap = new Map<string, any[]>();
    
    // 将站点按分类ID分组
    allSites.forEach(item => {
      const key = item.sites?.categoryId;
      if (!siteMap.has(key)) {
        siteMap.set(key, []);
      }
      siteMap.get(key)?.push(item.sites);
    });

    // 构建导航树
    return this.buildNavigationTree(allCategories, siteMap);
  }

  // 高效构建导航树
  private buildNavigationTree(
    allCategories: typeof categories.$inferSelect[],
    siteMap: Map<string, typeof sites.$inferSelect[]>
  ) {
    const map = new Map<number, any>();
    
    // 初始化基础结构
    allCategories.forEach(category => {
      map.set(category.id, { 
        ...category,
        children: [],
        sites: []
      });
    });
    
    // 填充子分类和站点
    allCategories.forEach(category => {
      if (category.parentId && map.has(category.parentId)) {
        map.get(category.parentId)?.children.push(map.get(category.id));
      }
      
      if (map.has(category.id) && siteMap.has(category.id.toString())) {
        map.get(category.id).sites = siteMap.get(category.id.toString()) || [];
      }
    });
    
    // 返回根节点
    return Array.from(map.values()).filter(c => !c.parentId);
  }
}
```

## 8. 性能优化建议

1. **索引优化**：
   ```sql
   CREATE INDEX idx_categories_parent_id ON categories(parent_id);
   CREATE INDEX idx_sites_category_id ON sites(category_id);
   ```

2. **使用缓存**：
   - 对于不频繁变化的导航数据，可以使用Redis进行缓存
   - 设置合理的缓存失效时间（如每天凌晨更新）

3. **API 分页支持**：
   - 当某个分类下的站点过多时，添加分页参数
   ```ts
   @Get('category/:id/sites')
   async getSitesByCategoryId(
     @Param('id') id: string,
     @Query('page') page: number = 1,
     @Query('limit') limit: number = 20
   ) {
     const offset = (page - 1) * limit;
     return this.sitesService.findPaginatedByCategoryId(Number(id), limit, offset);
   }
   ```

4. **懒加载支持**：
   - 当用户展开某个分类时才加载对应的站点
   ```ts
   @Get('category/:id/children')
   async loadChildrenCategories(@Param('id') id: string) {
     return this.categoriesService.findChildren(Number(id));
   }
   
   @Get('category/:id/sites/lazy')
   async loadCategorySitesLazy(@Param('id') id: string) {
     return this.sitesService.findByCategoryId(Number(id));
   }
   ```

5. **前端优化**：
   - 使用虚拟滚动技术处理大量数据
   - 对图标使用CDN缓存
   - 对常用分类进行本地存储

## 9. 数据初始化脚本

### 数据迁移脚本
```ts
// src/migrations/001-init-nav-data.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { DataSyncService } from '@/data/data.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const dataSyncService = app.get(DataSyncService);
  
  try {
    console.log('开始同步分类数据...');
    await dataSyncService.syncCategories();
    console.log('分类数据同步完成');
    
    console.log('开始同步站点数据...');
    await dataSyncService.syncSites();
    console.log('站点数据同步完成');
    
    console.log('数据初始化成功');
  } catch (error) {
    console.error('数据初始化失败:', error);
    process.exit(1);
  } finally {
    await app.close();
  }
}

bootstrap();
```

### 文件读取工具函数
```ts
// src/utils/file.util.ts
import { promises as fs } from 'fs';
import { join } from 'path';

export async function readJSONFile(filePath: string): Promise<any> {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`读取文件 ${filePath} 失败:`, error);
    throw error;
  }
}
```

## 10. 最终实现效果

### 示例：完整的导航树响应
```json
[
  {
    "id": 1,
    "name": "云服务",
    "parentId": null,
    "createdAt": "2023-08-15T10:00:00Z",
    "updatedAt": "2023-08-15T10:00:00Z",
    "children": [
      {
        "id": 30,
        "name": "主流云平台",
        "parentId": 1,
        "children": [],
        "sites": [
          {
            "id": 46,
            "title": "华为云",
            "url": "https://www.huaweicloud.com/",
            "icon": "https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_dd311b81980d4959a57d59b80bf17737.png",
            "description": ""
          }
        ]
      }
    ],
    "sites": []
  }
]
```