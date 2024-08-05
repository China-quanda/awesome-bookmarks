<template>
  <div class="home-page">
    <div class="home-top">
      <Search v-model="keyword"></Search>
    </div>
    <main class="home-main">
      <div class="home-left" v-show="showLeft">
        <Sidebar :list="sidebarList" />
      </div>
      <div class="home-right">
        <Main :list="list" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import Main from './components/main.vue'
import Sidebar from './components/sidebar.vue'
import Search from './components/search.vue'
// fetch('http://127.0.0.1:3000/h')
//   .then(async (result) => {
//     const res = await result.json()
//     console.log('res', res)
//   })
//   .catch((err) => { console.log(err) })

const keyword = ref('')

const list = ref([])
const sidebarList = ref([])
const aiList = ref([
  {
    id: 1,
    url: 'https://chatgai.lovepor.cn',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_7474fc1170be4782992f58d76021a165.png',
    title: '免费ChatGPT中文版',
    desc: '国内免费使用ai聊天问答、写作、文生视频、生成ppt、ai绘画于一体的产品',
  },
  {
    id: 2,
    url: 'https://openai.com/product/gpt-4',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_7ccb0a6aec7546018e0b42fc3a40c0e9.png',
    title: 'ChatGpt4',
    desc: 'OpenAI旗下最新ChatGPT4模型',
  },
  {
    id: 3,
    url: 'https://studio.d-id.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_72ccf40e6d0f428dac4e109e92499f0a.png',
    title: 'D-ID',
    desc: '静态人像图开口说话',
  },
  {
    id: 4,
    url: 'https://weeklyreport.avemaria.fun/zh',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_d766b2af44984a3696e8260395077c54.png',
    title: 'weeklyreport',
    desc: '基于GPT-3的日/周报生成器',
  },
  {
    id: 5,
    url: 'https://www.uyanai.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_76e36c5968124b1dbb86842f9e969f77.png',
    title: '免费ChatGPT',
    desc: '免费GPT4.0、多模态、MJ绘画',
  },
  {
    id: 6,
    url: 'https://aicodeconvert.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_db0e257c1b994e498b5dbfd20879af33.png',
    title: 'aicodeconvert',
    desc: '智能代码转换器',
  },
  {
    id: 7,
    url: 'http://beta.dreamstudio.ai/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_3a305bf1f31d449fb55ad2f1647d4980.png',
    title: 'Stable Diffusion',
    desc: '文本到图像生成AI模型',
  },
  {
    id: 8,
    url: 'https://agentgpt.reworkd.ai/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_542dd5fd6eb247d1bf6215513ec66b02.png',
    title: 'agentgpt',
    desc: '自主人工智能的开源项',
  },
  {
    id: 9,
    url: 'https://17yongai.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_14a1d272a09f4781911c7e6aef8cf196.png',
    title: '一起用AI导航',
    desc: '一起用AI | AI工具导航',
  },
  {
    id: 10,
    url: 'https://ai-bot.cn/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_1a1c7d72c6af4156a9a594397093e8f0.png',
    title: 'AI工具集导航',
    desc: '500+ AI工具导航大全',
  },
  {
    id: 11,
    url: 'https://web3.yunyingbiji.cn/',
    icon: 'https://web3.yunyingbiji.cn/wp-content/uploads/2022/10/ac1v2-lsg7h-001.ico',
    title: 'Web3导航',
    desc: '全网web3热门工具集',
  }
])
const cloudServerList = ref([
  {
    id: 1,
    url: 'https://www.aliyun.com/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_a21cfe9a964d4d5aad479e8ca4342844.png',
    title: '阿里云'
  },
  {
    id: 2,
    url: 'https://cloud.tencent.com/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_7dc6c92ca4bf4e3aa500034f23fe948c.png',
    title: '腾讯云'
  },
  {
    id: 3,
    url: 'https://cloud.baidu.com/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_ddc3bf7a83bc400e910749c2842b452f.png',
    title: '百度云'
  },
  {
    id: 4,
    url: 'https://activity.huaweicloud.com',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_dd311b81980d4959a57d59b80bf17737.png',
    title: '华为云'
  },
  {
    id: 5,
    url: 'https://www.ctyun.cn/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_ca913ff39074405aaf964321fa75685b.png',
    title: '天翼云'
  },
  {
    id: 6,
    url: 'https://www.volcengine.com/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_af6f916096a04e49bb2a147114bb0823.png',
    title: '火山引擎'
  },
  {
    id: 7,
    url: 'https://aws.amazon.com/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_0bafe72325a3496294862dbd0cd66ab6.png',
    title: '亚马逊aws'
  },
  {
    id: 8,
    url: 'https://www.ibm.com/cn-zh',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_8bfcd285ee9347958dccbe1950d57d9a.png',
    title: 'IBM'
  },
  {
    id: 9,
    url: 'https://yunxin.163.com/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_cfc805942a334eaf8cd248f54fdcddce.png',
    title: '网易云信'
  },
  {
    id: 10,
    url: 'https://www.ksyun.com/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_25089ed6136645299aaa9e86aed09290.png',
    title: '金山云'
  },
  {
    id: 11,
    url: 'https://www.tsycdn.com/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_ae67b511edc346ff85a42a0524465c1f.png',
    title: '蓝易云'
  },
])
const xietongbangongList = ref([
  {
    id: 1,
    url: 'https://shimo.im/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/shimo.ico',
    title: '石墨文档',
    desc: '石墨文档,全新一代云Office办公软件,支持多人在线协同办公',
  },
  {
    id: 2,
    url: 'https://www.kdocs.cn',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/wps.png',
    title: '金山文档',
    desc: '完全免费，多人实时协作的在线Office',
  },
  {
    id: 3,
    url: 'https://www.baklib.com?utm_campaign=1&amp;utm_content=20&amp;utm_term=d2afe4c9-daef-4185-a9fc-77f0aa62c5c9&amp;utm_source=coderutil',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/website/file_0a2da71228d64a1dadbf929a294c697e.png',
    title: 'Baklib',
    desc: '优雅的云知识库构建平台，基于企业“帮助中心”的全场景解决方案',
  },
  {
    id: 4,
    url: 'https://doc.weiyun.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/weiyun.ico',
    title: '微云文档',
    desc: '腾讯公司打造的智能云服务，多人协同编辑，云端办公黑科技<',
  },
  {
    id: 5,
    url: 'https://note.youdao.com/web/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/youdao.ico',
    title: '有道云笔记',
    desc: '专注办公提效的笔记软件',
  },
  {
    id: 6,
    url: 'https://pan.baidu.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/pan.ico',
    title: '百度网盘',
    desc: '文件网络备份、同步和分享服务',
  },
  {
    id: 7,
    url: 'https://www.aliyundrive.com/',
    icon: 'https://gw.alicdn.com/imgextra/i3/O1CN01aj9rdD1GS0E8io11t_!!6000000000620-73-tps-16-16.ico',
    title: '阿里云盘',
    desc: '阿里云盘，不限速',
  },
  {
    id: 8,
    url: 'https://www.yuque.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/yue.png',
    title: '语雀',
    desc: '优雅高效在线文档编辑与协同工具',
  },
  {
    id: 9,
    url: 'https://www.teambition.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/tb.ico',
    title: 'Teambition',
    desc: '阿里巴巴工作学习套件',
  },
  {
    id: 10,
    url: 'http://www.mikecrm.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/mk.png',
    title: '麦客',
    desc: '一款在线表单制作工',
  },
  {
    id: 11,
    url: 'https://www.wjx.cn/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/wjx.png',
    title: '问卷星',
    desc: '问卷调查',
  },
  {
    id: 12,
    url: 'https://h5.bce.baidu.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/h5.png',
    title: '百度H5',
    desc: '一个在线H5制作平台',
  },
  {
    id: 13,
    url: 'https://www.tubiaoxiu.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/tbx.png',
    title: '图表秀',
    desc: '免费的在线图表制作工具',
  },
  {
    id: 14,
    url: 'https://web.baimiaoapp.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/baimiao.ico',
    title: '白描',
    desc: '高效的中文ocr文字识别软件',
  },
  {
    id: 15,
    url: 'https://modao.cc/brand',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_6722f6def1f140c0af6892af5d2ab851.png',
    title: '墨刀',
    desc: '在线产品设计协同一体化',
  }
])
const jishushequList = ref([
  {
    id: 1,
    url: 'https://www.cnblogs.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/cnblogs.png',
    title: '博客园',
    desc: '开发者的网上家园',
  },
  {
    id: 2,
    url: 'https://www.csdn.net/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/csdn.png',
    title: 'CSDN',
    desc: '中文最大的技术社区',
  },
  {
    id: 3,
    url: 'https://www.oschina.net/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_e50a240308c048569975c76889c7e5d4.png?x-oss-process=image/resize,m_fill,w_40,h_40',
    title: '开源中国',
    desc: '目前国内最大的开源技术社区',
  },
  {
    id: 4,
    url: 'https://segmentfault.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_87feae864e274579824d7398a588e042.png',
    title: 'SF思否',
    desc: '思否是中国领先的开发者技术社区',
  },
  {
    id: 5,
    url: 'https://juejin.cn/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/juejin.png',
    title: '掘金',
    desc: '一个帮助开发者成长的社区',
  },
  {
    id: 6,
    url: 'https://www.51cto.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/51.ico',
    title: '51CTO',
    desc: '中国领先的IT技术网站',
  },
  {
    id: 7,
    url: 'https://toutiao.io/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/toutiao.png',
    title: '开发者头条',
    desc: '程序员分享平台',
  },
  {
    id: 8,
    url: 'https://xie.infoq.cn/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/InfoQ.jpg',
    title: 'InfoQ',
    desc: '一个实践驱动的技术社区资讯站点',
  },
  {
    id: 9,
    url: 'https://stackoverflow.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/stackoverflow.svg',
    title: 'StackOverflow',
    desc: '全球最大的技术问答社区',
  },
  {
    id: 10,
    url: 'http://www.chinaunix.net/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/cu.png',
    title: 'ChinaUnix',
    desc: '中国最大的Linux/Unix技术社区',
  },
  {
    id: 11,
    url: 'https://ruby-china.org/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/ruby.png',
    title: 'Ruby china',
    desc: '国内最权威的 Ruby 社区',
  },
  {
    id: 12,
    url: 'https://studygolang.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/golang.ico',
    title: 'Golang中文社区',
    desc: 'Go语言爱好者的学习家园',
  },
  {
    id: 13,
    url: 'http://www.oschina.net/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_e50a240308c048569975c76889c7e5d4.png?x-oss-process=image/resize,m_fill,w_40,h_40',
    title: '开源中国',
    desc: '领先的中文开源技术社区',
  },
  {
    id: 14,
    url: 'https://www.runoob.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_271d8c04c9e54805844359e1e7fec3aa.png',
    title: '菜鸟教程',
    desc: '学的不仅是技术，更是梦想',
  },
  {
    id: 15,
    url: 'https://gocn.vip',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_58638886f8f9485cab8cd846643c87ea.png',
    title: 'GoCN社区',
    desc: '国内活跃的 Go 社区',
  }
])
const xuexishouceList = ref([
  {
    id: 1,
    url: 'https://v3.cn.vuejs.org/guide/introduction.html',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_11fcb00a6c92461fa39760806cbb2039.png',
    title: 'Vue.js手册',
    desc: '构建用户界面的渐进式框架',
  },
  {
    id: 2,
    url: 'https://zh-hans.reactjs.org/docs/getting-started.html',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_fd7e080582de47ef8666d1d0d76472e7.png',
    title: 'React教程',
    desc: '构建用户界面的 JavaScript 库',
  },
  {
    id: 3,
    url: 'https://www.apiref.com/css-zh/index.htm',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_624cf64d147b422ba2405b5e1719d4d2.png',
    title: 'css3中文手册',
    desc: 'css3中文手册',
  },
  {
    id: 4,
    url: 'http://shouce.jb51.net/spring/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_8eff5cc726bd4d7395cedb21eb0db80d.png',
    title: 'Spring中文手册',
    desc: 'Spring中文手册',
  },
  {
    id: 5,
    url: 'http://felord.cn/_doc/_springboot/2.1.5.RELEASE/_book/pages/boot-documentation.html#boot-documentation',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_8eff5cc726bd4d7395cedb21eb0db80d.png',
    title: 'SpringBoot中文手册',
    desc: 'SpringBoot中文手册',
  },
  {
    id: 6,
    url: 'https://www.springcloud.cc/spring-cloud-greenwich.html',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_8eff5cc726bd4d7395cedb21eb0db80d.png',
    title: 'SpringCloud中文手册',
    desc: 'SpringCloud中文手册',
  },
  {
    id: 7,
    url: 'https://www.springcloud.cc/spring-data-jpa.html',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_8eff5cc726bd4d7395cedb21eb0db80d.png',
    title: 'Spring Data JPA',
    desc: 'Spring Data JPA - 参考文档',
  },
  {
    id: 8,
    url: 'https://pdai.tech',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_a5b9a342aacc48d78723826790bcb46a.png',
    title: 'pdai.tech',
    desc: 'Java 全栈知识体系',
  },
  {
    id: 9,
    url: 'https://www.redis.com.cn/tutorial.html',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_d375648269eb4e618d6d60df03dba46a.png',
    title: 'Redis中文教程',
    desc: '简洁清晰的Redis中文教程',
  },
  {
    id: 10,
    url: 'https://docs.docker.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_887becd320f4402899d4ab235998a2d9.png',
    title: 'docker官方手册',
    desc: 'docker官方手册',
  },
  {
    id: 11,
    url: 'https://www.elastic.co/guide/cn/elasticsearch/guide/current/getting-started.html',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_36907798f62349f0bad2d902b14e4a37.png',
    title: 'Elasticsearch教程',
    desc: '实时的分布式搜索分析引擎',
  },
  {
    id: 12,
    url: 'https://www.mongodb.org.cn/tutorial/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_68fdfb49d02244f889b2af696cf0fe74.png',
    title: 'MongoDB教程',
    desc: '分布式文件存储的数据库',
  },
  {
    id: 13,
    url: 'https://www.topgoer.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_316cef59a1a04989b23240a4027e315d.png',
    title: 'Go中文文档',
    desc: 'Go中文文档',
  },
  {
    id: 14,
    url: 'https://docs.python.org/zh-cn/3/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_e3011e8244534cbdb06eaad61e41069e.png',
    title: 'Python3.10.4文档',
    desc: 'Python官方文档来了',
  },
  {
    id: 15,
    url: 'https://www.liaoxuefeng.com/wiki/1252599548343744',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_d136236971d74f38a71d71d8d84dafd6.png',
    title: 'Java教程',
    desc: '廖雪峰的Java教程',
  },
  {
    id: 16,
    url: 'https://aiyanbo.gitbooks.io/spark-programming-guide-zh-cn/content/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_dedc4d67bb79491692f8847e2e282282.png',
    title: 'Spark编程指南',
    desc: 'Spark编程指南简体中文版',
  },
  {
    id: 17,
    url: 'https://git-scm.com/book/zh/v2',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_500076cda08d4823b8e08194d992b563.png',
    title: 'Git学习手册',
    desc: 'git --fast-version-control',
  },
  {
    id: 18,
    url: 'https://www.kancloud.cn/wizardforcel/w3school-sql/93915',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_607659f922c049ea896f9449bcc198d0.png',
    title: 'SQL教程',
    desc: '简洁明了的SQL教程手册',
  },
  {
    id: 19,
    url: 'http://cn.linux.vbird.org/linux_basic/linux_basic.php',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_3a4825d15ae14ce5bffabccf8aac883b.png',
    title: '鸟哥的Linux私房菜',
    desc: '非常详细的Linux教程',
  },
  {
    id: 20,
    url: 'https://books.sonatype.com/mvnref-book/reference/index.html',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_62c439e2d40f4283a0d7f3718cebb240.png',
    title: 'maven手册',
    desc: '最详细详细的Maven手册',
  },
  {
    id: 21,
    url: 'https://books.halfrost.com/leetcode/ChapterOne/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_6b1c97e60ebf4eb19d8d6cad0728ad37.png',
    title: 'LeetCode刷题手册',
    desc: '经典丰富的算法在线刷题手册',
  },
  {
    id: 22,
    url: 'https://design-patterns.readthedocs.io/zh_CN/latest/structural_patterns/structural.html',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_c152812a2a4042fc942db0255c3edead.png',
    title: '图说设计模式',
    desc: '内容讲解详细生动',
  },
  {
    id: 23,
    url: 'https://mybatis.org/mybatis-3/zh/index.html',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_d9bbf97d8e5f43059fc822649399d7dd.png',
    title: 'Mybatis手册',
    desc: '优秀的持久层框架',
  },
  {
    id: 24,
    url: 'https://www.oraclejsq.com/article.html',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_5f07e4dd78ef48adb8a5c4499435a4fc.png',
    title: 'Oracle教程',
    desc: 'Free IT-Oracle教程',
  },
  {
    id: 25,
    url: 'http://www.yanhuangxueyuan.com/WebGL/',
    icon: '',
    title: 'WebGL入门手册',
    desc: 'WebGL零基础入门教程(郭隆邦)',
  },
  {
    id: 20,
    url: 'http://www.yanhuangxueyuan.com/Three.js/',
    icon: '',
    title: 'Three.js入门手册',
    desc: 'Three.js零基础入门教程(郭隆邦)',
  },
  {
    id: 20,
    url: 'https://www.runoob.com/',
    icon: '',
    title: '菜鸟教程',
    desc: '学的不仅是技术，更是梦想',
  }
])
const toubushequList = ref([
  {
    id: 1,
    url: 'https://www.douban.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/douban.ico',
    title: '豆瓣',
    desc: '文艺青年聚集地',
  },
  {
    id: 2,
    url: 'https://www.bilibili.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/bili.ico',
    title: 'B站',
    desc: '国内知名的视频弹幕网站',
  },
  {
    id: 3,
    url: 'https://www.zhihu.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/zhihu.png',
    title: '知乎',
    desc: '中国最大的问答社区',
  },
  {
    id: 4,
    url: 'https://www.toutiao.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/toutiao.ico',
    title: '今日头条',
    desc: '是一个通用信息平台',
  },
  {
    id: 5,
    url: 'https://creator.douyin.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/dou.ico',
    title: '抖音',
    desc: '短视频-记录美好生活',
  },
  {
    id: 6,
    url: 'https://video.kuaishou.com',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/kwai.ico',
    title: '快手',
    desc: '短视频-拥抱每一种生活',
  },
  {
    id: 7,
    url: 'https://www.xiaohongshu.com/explore',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/xhs.jpg',
    title: '小红书',
    desc: '标记我的生活',
  },
  {
    id: 8,
    url: 'https://www.jianshu.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/jian.ico',
    title: '简书',
    desc: '一个写作的社区',
  },
  {
    id: 9,
    url: 'https://xueqiu.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/xueqiu.png',
    title: '雪球',
    desc: '专业股票交流社区',
  },
  {
    id: 10,
    url: 'https://tieba.baidu.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/baidu.ico',
    title: '百度贴吧',
    desc: '全球最大的中文社区',
  },
  {
    id: 11,
    url: 'https://www.hupu.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/hu.ico',
    title: '虎扑',
    desc: '体育赛事为主的社区网站',
  },
])
const xuexipingtaiList = ref([
  {
    id: 1,
    url: 'https://time.geekbang.org/?code=I-dvIrU30BwOueI1tRpoWi2tb4CtqKUSN6U4r9SVQQE%253D',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/time.jpg',
    title: '极客时间',
    desc: '轻松学习，高效学习',
  },
  {
    id: 2,
    url: 'https://www.bilibili.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_67257074550c4f3fb1ce68964ba25e62.png',
    title: 'B站',
    desc: '哔哩哔哩',
  },
  {
    id: 3,
    url: 'https://www.runoob.com',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/cn.ico',
    title: '菜鸟教程',
    desc: '学的不仅是技术，更是梦想！',
  },
  {
    id: 4,
    url: 'https://www.yiibai.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/yibai.png',
    title: '易百教程',
    desc: '专注于IT教程和实例',
  },
  {
    id: 5,
    url: 'https://www.w3school.com.cn/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/w3.png',
    title: 'W3school',
    desc: '全球最大的中文 Web 技术教程',
  },
  {
    id: 6,
    url: 'https://www.imooc.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/imooc.png',
    title: '慕课网',
    desc: '程序员的梦工厂',
  },
  {
    id: 7,
    url: 'https://gitbook.cn/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/gitchat.png',
    title: 'Gitchat',
    desc: 'IT知识分享平台',
  },
  {
    id: 8,
    url: 'https://leetcode-cn.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/leet.jpg',
    title: '力扣LeetCode',
    desc: '专业的LeetCode分享平台',
  },
  {
    id: 9,
    url: 'https://github.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/github.svg',
    title: 'GitHub',
    desc: '世界最大的开源代码共享社区',
  },
  {
    id: 10,
    url: 'https://gitee.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/gitee.png',
    title: 'Gitee',
    desc: '中国最大的开源代码共享社区',
  },
  {
    id: 11,
    url: 'https://www.zhihu.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/zhihu.png',
    title: '知乎',
    desc: '中国最大的问答社区',
  },
  {
    id: 12,
    url: 'https://study.163.com/category/480000003131009',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/163.png',
    title: '网易云课堂',
    desc: '网易云课堂编程语言频道',
  },
  {
    id: 13,
    url: 'http://www.manongjc.com',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/ma.ico',
    title: '码农教程',
    desc: 'IT编程入门网',
  },
  {
    id: 14,
    url: 'http://techblog.pub/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/blog.jpg',
    title: '技术博客',
    desc: '原创技术博客大联盟',
  },
  {
    id: 15,
    url: 'https://kaiwu.lagou.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/lagou.png',
    title: '拉钩教育',
    desc: '互联网人职场专业能力提升平台',
  }
])
const jiedanList = ref([
  {
    id: 1,
    url: 'https://www.freetalen.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_963f831d30b344d7ad6a8212949912d0.png',
    title: '飞援',
    desc: '程序员兼职平台-飞援',
  },
  {
    id: 2,
    url: 'https://beijing.zbj.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_ef26da80d9b74ea591d741db8e7099d3.png',
    title: '猪八戒',
    desc: '中国领先的企业服务平台',
  },
  {
    id: 3,
    url: 'https://zb.oschina.net/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_f736c6061a69488595b8a79da7bdb5f8.png',
    title: '开源众包',
    desc: '靠谱的IT软件开发服务交易平台',
  },
  {
    id: 4,
    url: 'https://www.proginn.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_231d62c0f3174a5ca78cedc7a735a2fe.png',
    title: '程序员客栈',
    desc: '程序员自由远程工作平台',
  },
  {
    id: 5,
    url: 'https://www.xiaohuodui.cn/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_b17890caefed42d78dc47ffcd75ef16a.png',
    title: '杭州 | 小火堆科技',
    desc: '小火堆科技是一个为客户提供定制化数字解决方案的品牌，致力为企业提供可持续的业务数字化支撑团队。',
  },
  {
    id: 6,
    url: 'https://eleduck.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_48ee223fc873489c8ab0639c586e8c12.png',
    title: '电鸭社区',
    desc: '远程工作招聘社区，也是远程办公互联网工作者们的聚集地, 分享外包、零活、兼职等非主流工作机会。',
  },
  {
    id: 7,
    url: 'https://codemart.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_66510141af164b75bdb6c9444ee6b1ae.png',
    title: '码市',
    desc: '码市是互联网软件外包服务平台，意在连接需求方与广大开发者。让项目的需求方快速的找到合适的开发者。',
  },
  {
    id: 8,
    url: 'https://www.zbj.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_8b77a728fae040da93d85cd8c60f3d68.png',
    title: '码市',
    desc: '汇集海量程序员、设计师等人才招聘求职信息，国内领先的企业服务平台。',
  }
])
const tupianziyuanList = ref([
  {
    id: 1,
    url: 'https://www.iconfont.cn/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/website/file_12d932cd31d1480b97018e2dd656edad.png',
    title: 'iconfont',
    desc: '阿里巴巴出品图标库',
  },
  {
    id: 2,
    url: 'https://iconpark.oceanengine.com/home',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_b221c4c29273473d8e59e51203aa5bff.png',
    title: 'iconpark',
    desc: '字节跳动出品图标库',
  },
  {
    id: 3,
    url: 'https://js.design?source=coder&amp;plan=001',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_1b82af1006544b1fbbf68e00cad13729.png',
    title: '即时设计',
    desc: '实时协作专业UI设计工具',
  },
  {
    id: 4,
    url: 'https://818ps.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/tuguaishou.png',
    title: '图怪兽',
    desc: '会打字就能用的在线编辑器',
  },
  {
    id: 5,
    url: 'https://www.gaoding.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/dinggaosheji.ico',
    title: '稿定设计',
    desc: '稿定设计_让设计更简单',
  },
  {
    id: 6,
    url: 'https://www.tusij.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/tusiji.png',
    title: '图司机',
    desc: '10秒快速出图-人人都是设计师！',
  },
  {
    id: 7,
    url: 'https://www.fotor.com.cn/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/fotor.png',
    title: 'Fotor懒设计',
    desc: '在线设计神器免费设计素材模板',
  },
  {
    id: 8,
    url: 'https://www.chuangkit.com/designtools/designindex',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/chuangketie.png',
    title: '创可贴',
    desc: '做图做视频常备工具',
  },
  {
    id: 9,
    url: 'https://www.paixin.com/',
    icon: 'https://static.paixin.com/paixin-home/static/favicon_1.ico',
    title: '信拍',
    desc: '中国领先的创意内容素材平台',
  },
  {
    id: 10,
    url: 'https://pixabay.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/pixabay.png',
    title: 'Pixabay',
    desc: '免费正版高清图片素材库',
  },
  {
    id: 11,
    url: 'https://www.pexels.com/zh-cn/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/pexels.ico',
    title: 'Pexel',
    desc: '免费可商用图片视频素材网站',
  },
  {
    id: 12,
    url: 'https://www.bigbigwork.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/dazuo.png',
    title: '大作',
    desc: 'unsplash中文网站',
  },
  {
    id: 13,
    url: 'https://500px.com.cn/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/500px.ico',
    title: '500px',
    desc: '全球摄影爱好者学习交流',
  },
  {
    id: 14,
    url: 'https://shejishow.cn/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_d29c59fb4ae6470e8128e0406211773a.png',
    title: '设计秀',
    desc: '设计师工具箱丨免费下载网站',
  },
  {
    id: 15,
    url: 'https://www.tukeli.net/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_bdaa68429a084bf48ec6b45f0f8cd536.png',
    title: '皮卡智能',
    desc: '皮卡智能一键抠图',
  },
])
const ziyuantuijianList = ref([
  {
    id: 1,
    url: 'https://www.extfans.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_140fd7a0a4c14f92bdd3382ee41101ad.png',
    title: 'Extfans',
    desc: 'Chrome插件扩展下载网',
  },
  {
    id: 2,
    url: 'https://www.100font.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a062a161050484986683dd55171a2e1.png',
    title: '100font - 字体',
    desc: '100font 免费商用字体',
  },
  {
    id: 3,
    url: 'https://www.bookstack.cn/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_4e8295a06d714f08a9b42dd6710aa4fe.png',
    title: '书栈网',
    desc: '程序员开源书籍免费读',
  },
  {
    id: 4,
    url: 'https://book.zhishikoo.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_3dd6648268c7482e955c074f558d57c7.png',
    title: '书籍知识库',
    desc: '优质的电子书分享站',
  },
  {
    id: 5,
    url: 'https://www.jiumodiary.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/mo.png',
    title: '鸠摩搜索',
    desc: '文档搜索引擎',
  },
  {
    id: 6,
    url: 'https://mac.macsc.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_b9b147430c4c41ff92191e0483a14755.png',
    title: 'MacSC',
    desc: '精品mac软件下载',
  },
  {
    id: 7,
    url: 'https://www.macdo.cn/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9910b27e4c33461683884a6abd78a751.png',
    title: 'Mac毒',
    desc: 'Mac软件下载网站',
  },
  {
    id: 8,
    url: 'https://www.ypppt.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/youpin.svg',
    title: '优品PPT',
    desc: '免费PPT模板下载网站',
  },
  {
    id: 9,
    url: 'https://www.wdku.net/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/wd.ico',
    title: '依奇',
    desc: '在线超级转换工具',
  },
  {
    id: 10,
    url: 'https://www.flvcd.com/index.htm',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/flvcd.png',
    title: '硕鼠',
    desc: '最稳定的视频下载平台',
  },
  {
    id: 11,
    url: 'http://www.shipinyu.cn/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/stackoverflow.svg',
    title: '视频鱼',
    desc: '一个视频自助解析的服务平台',
  },
  {
    id: 12,
    url: 'http://czjx8.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/vip.jpg',
    title: '船长解析',
    desc: 'vip视频在线解析',
  },
  {
    id: 13,
    url: 'https://lv.ulikecam.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/jy.jpg',
    title: '剪映',
    desc: '最好用的视频剪辑工具',
  },
  {
    id: 14,
    url: 'https://www.savetweetvid.com/zh',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/savetd.ico',
    title: 'Twitter视频下载器',
    desc: '将Twitter视频下载到Mp4和Mp3',
  },
  {
    id: 15,
    url: 'http://wherebt.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/bt.ico',
    title: 'BT导航网',
    desc: '提供各种BT资源导航',
  },
])
const zhanzhanggongjuList = ref([
  {
    id: 1,
    url: 'https://invite.51.la/1NMdrUBK?target=V6',
    icon: 'https://www.51.la/favicon.ico',
    title: '51.LA',
    desc: '51la网站流量统计',
  },
  {
    id: 2,
    url: 'https://tool.chinaz.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/cz.ico',
    title: '站长之家',
    desc: '站长工具是站长的必备工具',
  },
  {
    id: 3,
    url: 'https://tongji.baidu.com/web/welcome/login',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/baidu.ico',
    title: '百度统计',
    desc: '领先的中文网站分析平台',
  },
  {
    id: 4,
    url: 'https://passport.umeng.com/login?appId=cnzz',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/cnzz.ico',
    title: 'CNZZ',
    desc: 'CNZZ网站流量统计',
  },
  {
    id: 5,
    url: 'http://www.alexa.cn/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/alexa.png',
    title: '网站排名',
    desc: 'Alexa网站流量全球综合排名查询',
  },
  {
    id: 6,
    url: 'https://www.5118.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/5118.ico',
    title: '5118',
    desc: '长尾词挖掘,营销情报,站长工具',
  },
  {
    id: 7,
    url: 'https://www.aizhan.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/az.ico',
    title: '爱站网',
    desc: '各种网站工具，关键词排名',
  },
  {
    id: 8,
    url: 'https://www.similarsites.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/sim.png',
    title: 'Similarsites',
    desc: '查询相同类型网站',
  },
  {
    id: 9,
    url: 'https://xiaomark.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/xm.png',
    title: '小码短链',
    desc: '短网址跳转工具',
  },
  {
    id: 10,
    url: 'https://yinliu.club/member/KeywordHot/index',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/jk.png',
    title: '极客增长',
    desc: '流量操盘手的必备工具',
  },
  {
    id: 11,
    url: 'https://www.aliyun.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/ali.png',
    title: '阿里云ECS',
    desc: '弹性可伸缩的云服务器',
  },
  {
    id: 12,
    url: 'https://curl.qcloud.com/JtswGRWT',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/tengxun.ico',
    title: '腾讯云',
    desc: '提供云计算，云主机、云服务器',
  },
  {
    id: 13,
    url: 'http://hao.199it.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/199.png',
    title: '大数据导航',
    desc: '快速找到大数据相关的工具平台',
  },
  {
    id: 14,
    url: 'https://wanwang.aliyun.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/wanwang.ico',
    title: '域名注册',
    desc: '域名注册',
  },
  {
    id: 15,
    url: 'https://www.tianyancha.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/tianya.png',
    title: '天眼查',
    desc: '查公司、查老板、查关系',
  }
])
const chromechajianList = ref([
  {
    id: 1,
    url: 'https://www.baidufe.com/fehelper/index/index.html',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_bd656703b32a42429e2bb7821c9d9711.png',
    title: 'FeHelper',
    desc: '前端必备，集成了包括 JSON 格式化、二维码生成与解码、信息编解码、代码压缩、美化、页面取色、Markdown与 HTML 互转、网页滚动截屏、正则表达式、时间转换工具、编码规范检测、页面性能检测、Ajax 接口调试、密码生成器、JSON 比对工具、网页编码设置、便签笔记等各种功能。',
    tipText: '前端必备',
    tipBgColor: '#f6416c',
  },
  {
    id: 2,
    url: 'https://jsonview.com/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_453d9f8a79d34d1e9dbdf767399fff2d.png',
    title: 'JSONView',
    desc: '具有代码自动高亮,自动缩进,自动折叠功能.甚至JSON文件中有错误，JSONView仍然可以显示原始代码',
    tipText: 'JSON格式化',
    tipBgColor: '#3f72af',
  },
  {
    id: 3,
    url: 'https://www.crx4chrome.com/extensions/aejoelaoggembcahagimdiliamlcdmfm/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_4b785829b9da4e59991ebe0ebb3731c7.png',
    title: 'Talend API Tester',
    desc: '被称为专为编程人员开发的一款进行网页调试的工具。使测试HTTP和RESTAPI变得容易。可与REST，SOAP和HTTP API进行可视化交互。',
    tipText: 'API调试工具',
    tipBgColor: '#112d4e',
  },
  {
    id: 4,
    url: 'https://www.extfans.com/web-development/dogkpdfcklifaemcdfbildhcofnopogp/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_afafbbd7c0814da4a4415720d91e6278.jpeg',
    title: 'Axure RP',
    desc: 'Axure RP Extension是一款谷歌插件，主要可以用来查看原型文件',
    tipText: '预览Axure',
    tipBgColor: '#fc5185',
  },
  {
    id: 5,
    url: 'https://www.extfans.com/productivity/aapbdbdomjkkjkaonfhkkikfgjllcleb/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_63c85511be6746278b91f53b3eab2f05.png',
    title: 'Google翻译',
    desc: 'Google官方团队出品，具有划词翻译能力，当然是Chrome最好用的汉译英插件',
    tipText: '翻译',
    tipBgColor: '#0074e4',
  },
  {
    id: 6,
    url: 'https://www.octotree.io/download',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_1e5701d372d943758bd5ef672a4c4114.png',
    title: 'Octotree',
    desc: '让你通过文档库的方式管理、查看你的 GitHub 仓库，简单直观的同时，也方便你进行文件之间的跳转操作',
    tipText: 'GitHub 文档库',
    tipBgColor: '#f67280',
  },
  {
    id: 7,
    url: 'https://www.tampermonkey.net/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_a2ef8b53ede140188cc0fda115e3c4d0.png',
    title: 'tampermonkey',
    desc: '可以称之为是一个伟大的Chrome插件，他的魅力在于脚本文件',
    tipText: '脚本',
    tipBgColor: '#5da0a2',
  },
  {
    id: 8,
    url: 'https://adblockplus.org',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_133f32f6425c4c2c9546882702cfb37d.png',
    title: 'AdBlock chrome',
    desc: '最知名的广告拦截插件之一，拥有数千万用户，也是最受欢迎的 Chrome 扩展程序之一',
    tipText: '广告拦截',
    tipBgColor: '#c06c84',
  },
  {
    id: 9,
    url: 'https://www.one-tab.com/',
    icon: 'https://www.one-tab.com/web/images/favicon/apple-touch-icon.png',
    title: 'OneTab',
    desc: 'Save up to 95% memory and reduce tab clutter in Google',
    tipText: '标签管理',
    tipBgColor: '#3498db',
  }
])
const jishutuanduiList = ref([
  {
    id: 1,
    url: 'https://tech.meituan.com',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_63395250de7a43c8a42223e723b45c25.png',
    title: '美团技术团队',
    desc: 'meituan',
  },
  {
    id: 2,
    url: 'https://blog.csdn.net/Taobaojishu',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_b2f6357dbd094a31a9f48531d0dbfdcc.png',
    title: '阿里淘系技术团队',
    desc: 'CSDN',
  },
  {
    id: 3,
    url: 'https://fex.baidu.com',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_f326100ab94c4992a4e0fd9a990788f4.png',
    title: '百度FEX团队',
    desc: 'FEX',
  },
  {
    id: 4,
    url: 'https://blog.csdn.net/ByteDanceTech',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_45125bd292ef430fbb9e4cdafd76b1f3.png',
    title: '字节跳动技术团队',
    desc: 'CSDN',
  },
  {
    id: 5,
    url: 'https://blog.csdn.net/Tencent_TEG',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_5fb68f6c152f4559885015420a822a51.png',
    title: '腾讯技术工程',
    desc: 'CSDN',
  },
  {
    id: 6,
    url: 'https://blog.csdn.net/devcloud',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_af9f7b7ab037445cb052579d3652cc0b.png',
    title: '华为云技术团队',
    desc: 'CSDN',
  },
  {
    id: 7,
    url: 'https://xiaomi-info.github.io/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_768f4304e81d4002beb35fd041e0ffa0.png',
    title: '小米技术团队',
    desc: 'xiaomi-info',
  },
  {
    id: 8,
    url: 'http://www.alloyteam.com/page/0',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_2d73e2a0bfb74ce1a0b3e06035f372c5.png',
    title: '腾讯全端',
    desc: 'alloyteam',
  },
  {
    id: 9,
    url: 'https://75.team/cate/article/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_2d73e2a0bfb74ce1a0b3e06035f372c5.png',
    title: '360前端奇舞团',
    desc: '奇舞团',
  },
  {
    id: 10,
    url: 'https://fed.taobao.org/blogs/1',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_c12c999504a543d58e6d7107cbbac423.png',
    title: '淘系前端',
    desc: '前端',
  },
  {
    id: 11,
    url: 'https://blog.csdn.net/jILRvRTrc',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_afa7d4e0e1b64a738d6a8421acc28734.png',
    title: 'Google 开发者',
    desc: 'CSDN',
  },
  {
    id: 12,
    url: 'https://blog.csdn.net/UbuntuTouch',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_1a1b401668964f65ba3f07388546185c.png',
    title: 'Elastic中国社区',
    desc: 'CSDN',
  },
  {
    id: 13,
    url: 'https://blog.csdn.net/weixin_38912070',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_6dfb0ecb87314d64a5490ae69109b28c.png',
    title: '咸鱼技术',
    desc: 'CSDN',
  },
  {
    id: 14,
    url: 'https://isux.tencent.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_a5afe9311d504a3bb9bdb9391c4f2279.png',
    title: '腾讯ISUX',
    desc: 'isux',
  },
  {
    id: 15,
    url: 'https://jelly.jd.com/',
    icon: 'https://jelly.jd.com/3.0/fonts/2657ceafd877a9cbe0e7604b36c21906.svg',
    title: '京东设计中心',
    desc: 'jelly',
  },
  {
    id: 16,
    url: 'https://efe.baidu.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_e855394b0fd94e7f924e85fcd94b9b17.png',
    title: '百度EFE技术体系',
    desc: '百度EFE',
  },
  {
    id: 17,
    url: 'https://zhuanlan.zhihu.com/ElemeFE',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_d2c05dac268c46e989de3d62399886b7.png',
    title: '饿了么前端',
    desc: '知乎',
  },
  {
    id: 18,
    url: 'https://blog.csdn.net/DiDi_Tech',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_b44a121b657048a2b47784a3f9c8b3c2.png',
    title: '滴滴技术',
    desc: 'CSDN',
  },
  {
    id: 19,
    url: 'https://blog.csdn.net/HUAWEI_HMSCore',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_071ba3b6d6874fe99afbe8a58adb38bd.png',
    title: '华为移动服务',
    desc: 'CSDN',
  },
  {
    id: 20,
    url: 'https://aws.amazon.com/cn/blogs/aws/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_7c2610f186df46d2a75bd7ebb3328ccb.png',
    title: 'Amazon Blog',
    desc: '亚马逊',
  },
  {
    id: 21,
    url: 'https://engineering.fb.com',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_a5f72c028f114584b302954b036c40d9.png',
    title: 'Facebook',
    desc: 'Facebook',
  },
  {
    id: 22,
    url: 'https://devblogs.microsoft.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_5058ecc4abb0473da60293637b62b790.png',
    title: 'Microsoft',
    desc: 'Microsoft',
  },
  {
    id: 23,
    url: 'https://eng.uber.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_cfff97ab757b44eca91f5a9f0875cffa.png',
    title: 'Uber Engineering',
    desc: 'Uber',
  },
  {
    id: 24,
    url: 'https://tech.souyunku.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_b9335d4d5d794b54834d7b32fa08f77e.png',
    title: '搜云库技术团队',
    desc: '搜云库',
  },
  {
    id: 25,
    url: 'https://aotu.io/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_fe97a9f2fce44bafb481d8590f9678b6.png',
    title: '凹凸实验室',
    desc: '京东用户体验设计部',
  },
  {
    id: 26,
    url: 'https://tech.ebayinc.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_f7156d9d99fe41219f3145c5c6dc864d.png',
    title: 'eBay Tech',
    desc: 'eBay',
  },
  {
    id: 27,
    url: 'https://developer.ibm.com/blogs/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_1e20503c1d304e8a81571125259564a8.png',
    title: 'IBM Blog',
    desc: 'IBM',
  },
  {
    id: 28,
    url: 'https://blog.csdn.net/tensorflowforum',
    icon: 'https://profile-avatar.csdnimg.cn/79679033db174a30abf82ba2e03eb4d0_tensorflowforum.jpg!1',
    title: 'TensorFlow',
    desc: 'TensorFlow',
  },
])
const cyZixunList = ref([
  {
    id: 1,
    url: 'https://www.qbitai.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_ae9093a777ef4738912b80d122f0388c.png',
    title: '量子位',
    desc: '追踪人工智能新趋势，报道科技行业新突破',
  },
  {
    id: 2,
    url: 'https://www.huxiu.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/huxiuwang.png',
    title: '虎嗅网',
    desc: '虎嗅网,聚合优质的创新信息与人群',
  },
  {
    id: 3,
    url: 'https://www.tmtpost.com',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/taimeiti.png',
    title: '钛媒体',
    desc: '钛媒体_专业无止境-网罗天下创新事',
  },
  {
    id: 4,
    url: 'https://36kr.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/36kr.png',
    title: '36Kr',
    desc: '36氪_为创业者提供最好的产品和服务',
  },
  {
    id: 5,
    url: 'https://www.cyzone.cn',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/chuangyebang.png',
    title: '创业邦',
    desc: '创业邦 - 关注创新经济及其推动者',
  },
  {
    id: 6,
    url: 'https://chaping.cn',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_2c9220f0211844088c3c0acdab1300e7.png',
    title: '差评',
    desc: 'DEBUG THE WORLD，科技类产品评测资讯网',
  },
  {
    id: 7,
    url: 'http://www.geekpark.net/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/jikegongyuan.png',
    title: '极客公园',
    desc: '最新的科技动态，关注极具创新精神的科技产品',
  },
  {
    id: 8,
    url: 'https://www.itjuzi.com/',
    icon: 'https://qiqihao.oss-cn-beijing.aliyuncs.com/static/coderutil/icon/itjizi.png',
    title: 'IT 桔子',
    desc: '泛互联网创业投资项目信息库及商业信息服务商',
  }
])
const zhaopinpingtaiList = ref([
  {
    id: 1,
    url: 'https://www.zhipin.com/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/zhaopin/boss.png',
    title: 'Boss直聘',
    desc: '专业的计算机人才招聘平台',
  },
  {
    id: 2,
    url: 'https://www.lagou.com/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/zhaopin/lagou.png',
    title: '拉勾网',
    desc: '一家专为互联网从业者提供工作机会的招聘网站',
  },
  {
    id: 3,
    url: 'https://www.nowcoder.com/contestRoom',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/zhaopin/niuke.png',
    title: '牛客网',
    desc: '集笔面试系统、题库、社群交流于一体',
  },
  {
    id: 4,
    url: 'https://leetcode-cn.com/',
    icon: 'https://coderutil.oss-cn-beijing.aliyuncs.com/zhaopin/likou.png',
    title: 'LeetCode 力扣',
    desc: '全球极客挚爱的技术成长平台官方',
  }
])
const ruanjianxiazaiList = ref([
  {
    id: 1,
    url: 'https://www.jetbrains.com/idea/download/#section=mac',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_ca93d7ef4faf46d8926c969ca3286593.png',
    title: 'IntelliJ IDEA',
    desc: 'JetBrains 致力于为开发者打造最高效智能的开发工具',
  },
  {
    id: 2,
    url: 'https://www.myeclipsecn.com/download/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_21fd25e5490b4f9f90f69d93a4fe3665.png',
    title: 'MyEclipse',
    desc: 'MyEclipse-功能最全面的Java IDE',
  },
  {
    id: 3,
    url: 'https://tomcat.apache.org/download-9.cgi',
    icon: 'https://tomcat.apache.org/res/images/tomcat.png',
    title: 'Tomcat 9',
    desc: 'Tomcat 是一个小型轻量的应用服务器',
  },
  {
    id: 4,
    url: 'https://www.oracle.com/cn/java/technologies/javase/javase-jdk8-downloads.html',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_f3456314ccf34f91987a0664f02fcae5.png',
    title: 'JDK 8',
    desc: '使用 Java 编程语言构建应用和组件的开发环境',
  },
  {
    id: 5,
    url: 'https://jmeter.apache.org/download_jmeter.cgi',
    icon: 'https://jmeter.apache.org/images/apple-touch-icon.png" class="web-page-module-link-card-icon',
    title: 'JMeter',
    desc: 'JMeter 轻量、易上手压测工具',
  },
  {
    id: 6,
    url: 'https://maven.apache.org/download.cgi#',
    icon: 'https://jmeter.apache.org/images/apple-touch-icon.png" class="web-page-module-link-card-icon',
    title: 'Maven',
    desc: '最流行的Java项目构建系统',
  },
  {
    id: 7,
    url: 'http://download.redis.io/releases/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_33274c8638824eeaaca9156a27e37803.png',
    title: 'Redis',
    desc: '最常用的NoSQL型数据库',
  },
  {
    id: 8,
    url: 'https://www.mysql.com/downloads',
    icon: 'https://labs.mysql.com/common/logos/mysql-logo.svg?v2" class="web-page-module-link-card-icon',
    title: 'MySQL',
    desc: '最常用的关系型数据库',
  },
  {
    id: 9,
    url: 'http://www.navicat.com.cn/download/navicat-for-mysql',
    icon: 'http://www.navicat.com.cn/images/02.Product_00_AllProducts_Premium.png',
    title: 'Navicat',
    desc: '使用相对比较多的MySQL可视化管理工具',
  },
  {
    id: 10,
    url: 'http://www.sublimetext.com/3',
    icon: 'https://www.sublimetext.com/favicon.ico',
    title: 'Sublime Text',
    desc: 'Sublime Text 文本编辑器，同时也是一个先进的代码编辑器',
  },
  {
    id: 11,
    url: 'https://www.typora.io/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_a08c04790e0846e6a468346658ff317d.png',
    title: 'Typora',
    desc: 'Typora，有被成为世界上最漂亮的写作App',
  },
  {
    id: 12,
    url: 'https://www.charlesproxy.com/',
    icon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_e1e26aae35174a14b9e1eb67cc954d71.png',
    title: 'Charles',
    desc: 'Charles，最好用的抓包工具',
  },
])
const ruisuosiList = ref([
  {
    id: 1,
    class: 'hot',
    title: '热门下载榜',
    list: [
      {
        id: 1,
        fileNamn: 'Java成神之路',
        fileUrl: '/resource/view?resid=RESOURCE_826fafe6fa884f6295ddd7293af18d95',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'http://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_bc8f8e6c9ca74a7ba6c18b36e4e800f6.jpeg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '侠与飞',
        upTime: '2023 / 3 / 20',
        downloadCount: 36
      },
      {
        id: 2,
        fileNamn: 'JAVA开发手册（嵩山版）.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_fdb6cc8dccb74e8aa4ef1b167d9ca1ba',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'http://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_cad9e8ac361043d187536ebe93c3dd8b.png?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '瑞索斯',
        upTime: '2023 / 3 / 20',
        downloadCount: 88
      },
      {
        id: 3,
        fileNamn: '码了个码-程序员盒子出品-纯前端-源代码',
        fileUrl: '/resource/view?resid=RESOURCE_1f801b03cbdd445795ce3c6800fe9002',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_ba600ddd80c74e188cff9af33de03c5c.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023/3/20',
        downloadCount: 527
      },
      {
        id: 4,
        fileNamn: '你不知道的JavaScript（下卷）.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_8f8f741410724aa68a9c1ef1ef03fb48',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2022 / 1 / 6',
        downloadCount: 49
      },
      {
        id: 5,
        fileNamn: 'java面试宝典',
        fileUrl: '/resource/view?resid=RESOURCE_f4b09628d8da4957b8c254c105f755a8',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'http://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_8daac707090044e4ac169eec66ae92be.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '不知所以然',
        upTime: '2023 / 10 / 3',
        downloadCount: 33
      },
      {
        id: 6,
        fileNamn: 'IDEA全家桶一键激活工具支持Win系统和Mac',
        fileUrl: '/resource/view?resid=RESOURCE_b15c10d782a840a4b6b8c26c2a5c266e',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_ba600ddd80c74e188cff9af33de03c5c.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_601e236e38054bd4bda74c81a35a7c05.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: 'kk',
        upTime: '2023 / 10 / 3',
        downloadCount: 21
      },
      {
        id: 7,
        fileNamn: '软技能：代码之外的生存指南.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e2391439a38a4b1883705288ac5859f6',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2022 / 8 / 1',
        downloadCount: 87
      },
      {
        id: 8,
        fileNamn: 'Idea激活器，非破解',
        fileUrl: '/resource/view?resid=RESOURCE_13167487a43742f1bb9eb62cc0a5b4ed',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_ba600ddd80c74e188cff9af33de03c5c.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_601e236e38054bd4bda74c81a35a7c05.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: 'kk',
        upTime: '2022 / 8 / 1',
        downloadCount: 11
      },
    ]
  },
  {
    id: 2,
    class: 'book',
    title: '电子书',
    list: [
      {
        id: 1,
        fileNamn: 'Java面试手册.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_b10dfa59c2e0471faaac8702cd0cef15',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 0
      },
      {
        id: 2,
        fileNamn: 'JAVA核心知识笔记大全.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_0dec3373e2384f4eb753efeaef7d665a',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
      {
        id: 3,
        fileNamn: 'Java高级架构面试知识点整理.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_f9101ca04bd94071b953aab81118d236',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
      {
        id: 4,
        fileNamn: 'Java高工面试手册汇总.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e10dc1ea86e641dba3ad5d9571531a2d',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
      {
        id: 5,
        fileNamn: 'Java 面试顶级解析（2023版）.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e10dc1ea86e641dba3ad5d9571531a2d',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
      {
        id: 6,
        fileNamn: '中国平安面试真题.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e10dc1ea86e641dba3ad5d9571531a2d',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
      {
        id: 7,
        fileNamn: '腾讯面试真题.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e10dc1ea86e641dba3ad5d9571531a2d',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
      {
        id: 8,
        fileNamn: '美团面试真题.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e10dc1ea86e641dba3ad5d9571531a2d',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
    ]
  },
  {
    id: 3,
    class: 'vip',
    title: '精品付费资源',
    list: [
      {
        id: 1,
        fileNamn: '腾讯面试真题.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e10dc1ea86e641dba3ad5d9571531a2d',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
      {
        id: 2,
        fileNamn: '中国平安面试真题.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e10dc1ea86e641dba3ad5d9571531a2d',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
      {
        id: 3,
        fileNamn: 'Java面试手册.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e10dc1ea86e641dba3ad5d9571531a2d',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
      {
        id: 4,
        fileNamn: 'Java高级架构面试知识点整理.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e10dc1ea86e641dba3ad5d9571531a2d',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
      {
        id: 5,
        fileNamn: '字节跳动 Java 面试顶级解析（2023版.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e10dc1ea86e641dba3ad5d9571531a2d',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
      {
        id: 6,
        fileNamn: 'JAVA核心知识笔记大全.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e10dc1ea86e641dba3ad5d9571531a2d',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
      {
        id: 7,
        fileNamn: 'Java高工面试手册汇总.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e10dc1ea86e641dba3ad5d9571531a2d',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
      {
        id: 8,
        fileNamn: '美团面试真题.pdf',
        fileUrl: '/resource/view?resid=RESOURCE_e10dc1ea86e641dba3ad5d9571531a2d',
        fileIcon: 'http://coderutil.oss-cn-beijing.aliyuncs.com/bbs-image/file_9a04b8428f82408f9fac43bd9362013a.png?x-oss-process=image/resize,m_fill,w_40,h_40',
        userAvatar: 'https://coderutil.oss-cn-beijing.aliyuncs.com/photo/file_9c67e4b6fc81444f909fa00797663b1e.jpg?x-oss-process=image/resize,m_fill,w_30,h_30',
        userName: '程序员七七',
        upTime: '2023 / 3 / 20',
        downloadCount: 1
      },
    ]
  },
])
setTimeout(() => {
  list.value = [
    {
      id: 1,
      title: '接单',
      icon: '',
      children: [
        {
          id: 1,
          icon: '',
          title: '飞援',
          url: 'https://www.freetalen.com/'
        },
        {
          id: 2,
          icon: '',
          title: '猪八戒',
          url: 'https://www.zbj.com/'
        },
        {
          id: 3,
          icon: '',
          title: '开源众包',
          url: 'https://zb.oschina.net/'
        },
        {
          id: 4,
          icon: '',
          title: '程序员客栈',
          url: 'https://www.proginn.com/'
        },
        {
          id: 5,
          icon: '',
          title: '小火堆',
          url: 'https://www.xiaohuodui.cn/'
        },
        {
          id: 6,
          icon: '',
          title: '电鸭社区',
          url: 'https://eleduck.com/'
        },
        {
          id: 7,
          icon: '',
          title: '码市',
          url: 'https://codemart.com/'
        },
      ]
    },
    {
      id: 2,
      title: '音乐 music',
      icon: '',
      children: [
        {
          id: 1,
          icon: '',
          title: 'HiFiNi - 音乐磁场',
          url: 'https://www.hifini.com/'
        },
        {
          id: 2,
          icon: '',
          title: '音乐在线试听',
          url: 'https://music.liuzhijin.cn/'
        },
        {
          id: 3,
          icon: '',
          title: 'QQ音乐',
          url: 'https://y.qq.com/'
        }
      ]
    },
    {
      id: 3,
      title: '视频 video',
      icon: '',
      children: [
        {
          id: 1,
          icon: '',
          title: '哔哩哔哩_bilibili',
          url: 'https://space.bilibili.com/316375357/favlist'
        },
        {
          id: 2,
          icon: '',
          title: '抖音-记录美好生活',
          url: 'https://www.douyin.com/'
        },
        {
          id: 3,
          icon: '',
          title: '精彩推荐-快手',
          url: 'https://www.kuaishou.com/new-reco'
        },
        {
          id: 4,
          icon: '',
          title: '西瓜视频',
          url: 'https://www.ixigua.com/?wid_try=1'
        },
        {
          id: 5,
          icon: '',
          title: '懂车帝 - 说真的还得懂车帝',
          url: 'https://www.dongchedi.com/'
        },
        {
          id: 6,
          icon: '',
          title: '6v电影-新版',
          url: 'https://www.ai66.cc/'
        },
        {
          id: 7,
          icon: '',
          title: '爱酷看看 ',
          url: 'http://www.ikukk.com/'
        },
      ]
    },
    {
      id: 4,
      title: '文档',
      icon: '',
      children: [
        {
          id: 1,
          icon: '',
          title: '语雀',
          url: 'https://www.yuque.com/dashboard'
        },
        {
          id: 2,
          icon: '',
          title: '金山文档',
          url: 'https://www.kdocs.cn/latest'
        },
      ]
    },
    {
      id: 5,
      title: '云盘',
      icon: '',
      children: [
        {
          id: 1,
          icon: '',
          title: '百度云盘',
          url: 'https://pan.baidu.com/'
        },
        {
          id: 2,
          icon: '',
          title: '阿里云盘',
          url: 'https://www.aliyundrive.com'
        },
      ]
    },
    {
      id: 6,
      title: '邮箱',
      icon: '',
      children: [
        {
          id: 1,
          icon: '',
          title: '阿里邮箱',
          url: 'https://qiye.aliyun.com/'
        },
        {
          id: 2,
          icon: '',
          title: 'QQ邮箱',
          url: 'https://mail.qq.com/'
        },
      ]
    },
    {
      id: 7,
      title: 'ai',
      icon: '',
      children: aiList.value
    },
    {
      id: 8,
      title: '云服务',
      icon: '',
      children: cloudServerList.value
    },
    {
      id: 9,
      title: '协同办公',
      icon: '',
      children: xietongbangongList.value
    },
    {
      id: 10,
      title: '技术社区',
      icon: '',
      children: jishushequList.value
    },
    {
      id: 11,
      title: '常用学习手册',
      icon: '',
      children: xuexishouceList.value
    },
    {
      id: 11,
      title: '头部社区',
      icon: '',
      children: toubushequList.value
    },
    {
      id: 12,
      title: '学习平台',
      icon: '',
      children: xuexipingtaiList.value
    },
    {
      id: 13,
      title: '技术接单',
      icon: '',
      children: jiedanList.value
    },
    {
      id: 14,
      title: '图片素材',
      icon: '',
      children: tupianziyuanList.value
    },
    {
      id: 15,
      title: '资源推荐',
      icon: '',
      children: ziyuantuijianList.value
    },
    {
      id: 16,
      title: '站长工具',
      icon: '',
      children: zhanzhanggongjuList.value
    },
    {
      id: 17,
      title: 'Chrome插件',
      icon: '',
      children: chromechajianList.value
    },
    {
      id: 18,
      title: '技术团队',
      icon: '',
      children: jishutuanduiList.value
    },
    {
      id: 19,
      title: '创业&科技资讯',
      icon: '',
      children: cyZixunList.value
    },
    {
      id: 20,
      title: '招聘求职',
      icon: '',
      children: zhaopinpingtaiList.value
    },
    // {
    //   id: 21,
    //   title: '软件下载',
    //   icon: '',
    //   children: ruanjianxiazaiList.value
    // },
    // {
    //   id: 22,
    //   title: '资源下载',
    //   icon: '',
    //   children: ruisuosiList.value
    // },
  ]

  list.value.forEach(item => {
    sidebarList.value.push(removeChildren(item))
  })
}, 0);

function removeChildren(data) {
  // Create a new object without modifying the original
  const newData = { ...data }; // Deep copy the first level
  delete newData.children; // Remove the children property
  return newData;
}

const showLeft = ref(true)
function handleResize() {
  if (window.innerWidth <= 960) {
    showLeft.value = false
  } else {
    showLeft.value = true
  }
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
})
</script>

<style scoped lang="scss">
.home-page {
  position: relative;
  padding: 15px;
}

.home-top {
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
}

.home-main {
  position: relative;
  display: flex;
  gap: 15px;
  height: calc(100vh - 64px - 60px - 30px);
  // min-height: calc(100vh - 64px - 113px);
  overflow-y: scroll;

  // background-color: aqua;
  &::-webkit-scrollbar {
    display: none;
  }

  .home-left {
    position: sticky;
    top: 40px;
    left: 0;
    flex-wrap: 0;
  }

  .home-right {
    flex: 1;
  }
}
</style>