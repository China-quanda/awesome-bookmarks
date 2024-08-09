<template>
  <div class="home-page">
    <div class="home-top" v-show="!showIframe">
      <Search v-model="keyword"></Search>
    </div>
    <div class="home-bottom">
      <Iframe v-model="showIframe" :url="urlIframe"></Iframe>
    </div>
    <main class="home-main" v-if="true">
      <div class="home-left" v-show="showLeft">
        <Sidebar :list="sidebarList" />
      </div>
      <div class="home-right">
        <Main :list="list" @onClick="clickItem"/>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import Main from './components/main.vue'
import Sidebar from './components/sidebar.vue'
import Search from './components/search.vue'
import Iframe from './components/iframe.vue'
const showIframe = ref(false)
const urlIframe = ref('')
// fetch('http://127.0.0.1:3000/h')
//   .then(async (result) => {
//     const res = await result.json()
//     console.log('res', res)
//   })
//   .catch((err) => { console.log(err) })
function clickItem(e){
  console.log('click',e)
  urlIframe.value = e.url
  // showIframe.value = false
  if(!showIframe.value){
    showIframe.value = true
  }
}
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
  const alist = [
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

  alist.forEach(item => {
    list.value.push(item)
    sidebarList.value.push(removeChildren(item))
  })
}, 0);

// frontend 前端
// pc组件库 pc-c
const pcComponentList = ref([
  {
    "id": 1,
    "url": "https://element-plus.org/zh-CN",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACnklEQVQ4jW2TS2hVZxSFv/2fk5vEV4gvpNY2KhUUjUJQwZp702JbcZ6KDoQQiwh2oFTiA/EIKkFRSlsVa9JbxQz01omgkw5MjNqiBopihXbixFAUFZuHeO85/3Jwc66Kbv7B/tks9tpr7wXvC8mI5Cq5ZGlpQaRM9pSi9B++A25VgFkCaNFx1d81ewZAJLd8JtOqQ444Y03uF2X6JrDHVYDnFQBQsGTpMc3KdSs/dSJPc906t+IHzSUyH3uGSLiF51ESc4NWvL3ZvCFSTUMD31nAbsU8AU5JbHRVzPAJB5895tCd7TbSfELL+jfbTQBLuzcPsy4M6cSYooQDQy85OrDJRhsPa3z9dDqcsUPGA19k39V26yGSIzIPQHO3vv3iNymXV77pe32UMmo6qao0X3pcc1p+1eBXF6VslzpSvcIxGh8Xn3Onr93aKkIW8AObrASw8metqqphv08YX/yfFzhml5lTXpVEgiiVVyejgAfTpz/qg8/OqKe2nt8F43xMc2mU2yaqAfgacwDOMHNQnsnUcoUAIKxli8uwvjRMW+8Ga1TI5MwElghGykzfuAOVn4Gptw8PEBuXi4McKxo+l9eloJo15hBGkuIqdyDPKJhoVZCqe73drmWmsL5uGoMuoCl5yZelYf40MRGAv19rYEEVCxtPaDoFS4gUEsllu9RRU8chH3Pgygab4Yf4K8gwv7L+BWMaxJ4eC3k4dRL3cmf0DZHFROYx7o8+ZnHvDfa15NUZ1vHIAp4njtNjIr42yYdbVfvJEnZi7BT8mxTZ3r/RLuW61GoZTjqjPvZ0lp5w+I9t9jTFWcVxZgJY9pPm1Y5jL2KtOf5zGWb6IhfiEXZd22L/pMaqXOE7ThyLbJeyn59VYWVeq9+u6y3/vAI0qSSwvH9RxwAAAABJRU5ErkJggg==",
    "title": "Element Plus",
    "desc": "Element Plus"
  },
  {
    "id": 2,
    "url": "https://element.eleme.cn/#/zh-CN/component/installation",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAClklEQVQ4jX2TTYiVZRiGr+c7Zzwz4xn7o5/RJKFoEQRNP7RwRiSyRQylCM7CFKlNixbBUC3ciBEjQ9gpCkyYoDLczGJMnWlKxKFpE/2M0SJE0HTUStPKms6Z833v1eKYmWEXPJsXnpsH3vuCyxhsMRMyAGpu7Nvj931jHqfmRgAhY4sZGPyL1mLrcasPL3vfiW2Hdd7WDB3WO3Y5zpAPXQqKVtCVvOjijhHffPqQzVO5mnJrMxa1GQvNnc31mSnnF474Gs+5+PLVANUR1z426ez0edXCgydt9o6aFu1oTe+o6dNTNrVw8id9dMLZrhHXAAQrra4a5Ls9/Sz5+XfmX/qMtokTsCCDatnIAi7m4Q9/wGAPvNrbiDkqrN7HiU82c0+ZEpXuim0d4MBElGfOGd0LwyRRGPzWhFIQL9yPgz3GXF5JnSXjtgrtdEclo51UEOZGANzQjkmCwEYh994kH/bj8HLi8x9xYBwaRkhIGTM6CSQiIELyorXcLIhqW7C3P1i2iFj3ET6xl7jzeqlkUEhwHZS5BkmotsFb38DwV3BrJ0ythRVLUpYs/f3pZMwhgQrJoFxCJCplPFvHoS/l+R78dj1x38247YtSagglkF8ho06WYZRJlAIu/ElkWSskJA6sDjY/SOw+gne9S3xwBDoiERjkREZB40w98ouRMfq4+cDdkX6pw4UGdlcRpH8frp+ER5aGB9aYz0XGmXrUOUcdgK53fHLlfo9+fFY1OX3a5opR0407TV07TD27TdOnW0WaOq+rrijSPzzrLQvednjDQevH51VzX5+xeONSlU82ddMh5ys73f6fKl8l0wO3v+f+l7/WRmrJ9MqMLt3lOFv/T6ardd7uur4xjy0f8xg1n7qWzn8B+yieXRI8OTwAAAAASUVORK5CYII=",
    "title": "Element2",
    "desc": "Element2"
  },
  {
    "id": 3,
    "url": "http://www.layui-vue.com/zh-CN/index",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAA00lEQVQ4jbWQyw7BUBCGZ85p69QlIiQWdGEhEezZ2HtqL0FiIxEikUosSulR7RkLt0ZaVGJW/1y+yT+DvcEQ0gRLNf0LoD0UMeZ1LQAAQL73MnP7AwAM/Eb1VrWdJCBqCb+x9P+j4wEyeJgTYU4AgBJGAqAIiK4yLOUP/absWMrQZatGiDEAKqVt3WfjFKA8y3bdnCzxvujVkjleoB9cdVAucNcT05USenRGiyZ8dyyMxr5VIdMARaRrGKiwmOWujAcAgJ3OYraOVvSN8/lLbyI1cAHMk0Sjl8/zjwAAAABJRU5ErkJggg==",
    "title": "Layui - Vue",
    "desc": "Layui - Vue 前端 UI 框架"
  },
  {
    "id": 4,
    "url": "https://vuetifyjs.com/en",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABpElEQVQ4jbWSMWhTURSGv3NyU/OS0DWDUxERF9dODlmdgruuwUUfDpEah25F7awQi3WpEhHUWSEi2cQsIgUXwYISogarJk197x6H9D1NbIognu2e8//ff7j3wj+WPHhji5qhMj3oDqH7DaIRjZsPOzk9dvzstMYrj1xe2NyBx0AJwAzefoH+CAReuBb17ODrUx9FZZybyLBRsKKnjsq2CfWk2xuOzTZmhTc+PK8glPmxO5FuXuqfz8u2ArxaYB14CdDfSTX3NhrPOmq2SrJaYsY6vV5uHUABlkU8EAI2igHhe6RcGs7JRYQFAFR/+VUvsCw+BQCcPiJtjOZe2NXbjSdehKU0NpvdW8Tf71WDdtJOAQAaUDvk2BzCqsvOrQBFAJyDjANkEO1mahOe3w+Vw7JlMSfv3mmdwDiT7pzLJw93vR8G72YCAC4vyicRvYIgabNQwIwtp/lr0/o/AADmbWPiXJjHhNr7qgz+CtC9VW4C44sShWKx/fFc0NxPuy8AMIl9CHgrznsvGoLYDO3sKlVba6Wl12sHadxBQ4vjOuP/8v/qJ2aVmdEi/12CAAAAAElFTkSuQmCC",
    "title": "Vuetify",
    "desc": "Vuetify — A Vue Component Framework"
  },
  {
    "id": 5,
    "url": "https://www.naiveui.com/zh-CN/os-theme/docs/introduction",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACbklEQVQ4jX2TP2idVRjGf88533fvDTVJbZOayUg3BycFhzhEiELFqeIfRKnQQYpdXNQiYjYLCoJQxEUQgltdrIFgwAxCF4M4uLcqVIklhNDk3u+7530cbnKTivhu58D7O8/7PueBoxJGLJP4n3pjff7axR/Pbr269vDjANW4GYwA8Ph8DH5ulc5sPf8pVbqUeyL300vA5iHAL37/4PREnvoyCjdXnrn9yTFVIDzTnV+oJ/Kl9l40Dtc4AiABen3toTMTmrrRm6zO13X6+PzXc+8cghc3yACloVcGUUZUSRrprQCnPPHWxOn81P7dMlBS41ZXnrs289itrb8vbjxNA8gqYaokKWwQSYcKKMF0tC7I2Xa2vN2drF47Ozd7fekq04Bzznm8EIGJIwC4GJKdQBKmanbLsOrl57unznz35DJTuRO7kmSPlhsebTwBpJSQJWFhB5JTJ1XNXvQ73bRwamZ2tb8Tj9q06KBn5NT9ntsgqe49kD4qg/ilcyL1mr3o110tNNvxAeFWjJ5WSkcKbI/sQgXRmZqtfy7tvXOl75/qXuqV1i2ykWRkY5s4AozuQUIOe7Cv6bW39+7sb/+1NByUb+sTuTYMMRaBIIzyfSP42L8LxxDQ+nvs3NHWC81uuY45jSi2ItUpG3bGgIgYWWNbIowz4MUfqDbfpF29vPVy6vJ5qpjsncydvbvtjdjf/gxQdeiCsSUpd8jDcB9gY5FykIvyzSt/vnth/ZH+oClzv568fXnzCdpxmIIg5UqkqJv9uPpH9fvNY0kY11dLtz78dzorgKHblXaQLpShv1h59rf3/zvIMI768oEFwD+0fR3IMZJYHQAAAABJRU5ErkJggg==",
    "title": "Naive UI",
    "desc": "Naive UI - Naive UI"
  },
  {
    "id": 6,
    "url": "https://www.antdv.com/docs/vue/introduce-cn",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACT0lEQVQ4jYWTO2tUURSFv33OvXkNanwQExsNGiIpgthYCBoVwUoQmVEEf4SgiCAyhY9gwEoEIYokEGUmhURJYyAi2FlYBVQQC9FB1IyJY2buY2+bG8cRxdXutRbr7LUP/AkzsZGRYH5kJMAQA7H5YmD5vMdM/qQLRXMURXc8t/MuUXm934/WD57Y7tqDSbeuS9nQ4ayrrbYo7nTP2Fhl54v0grW59NWwXKdozjGEAGjMsHS7awNP0rMzG/VdWlu56T9X98r76p7oa+PGrVzu08DT+Jx1uavpIsMADCEBCxgAynLyHdXYXbl0amK6cKxz6tuuA1WXyvc1M5PPBksr/dFScFlSVOssA7CABasJRPEkiKU0vriOwMDJy/lZAAPXE3cEYUTDKSF1gmaCDJpiIogp0h4jAlrK5z1lEMrppkUkCRGXIhZlojI0DRLECaCIggcolEqa5cMMpzXEEmg1KK+2h5pipljkUMwEEcumEkVoGIN4zGIUgDw4StkSY9osQYEwSOhGxCiZJ28exKTGeksJrYFqRJglMEchqzGlgsNrhA+Fu733bRsFSSlLuu6i9XvjjtZxluItopIlEFmNuHac9WtzlCTkkEWA47U6Dn94BN39zFnCAB4sZk6g8G2UKkjraW4es5zvY1o8R4jBhFcrbyBZZjDra3apQoFJqTVPufkJBMQ4Y51bdvMA4aj+ABQ0grjK48W35Lkn9V/cVoPfTIrW1ruVKec5bgYkPPy4j5MMSON38T+w+iwL+sZtove2TYAFrbP/4m/Ev4t/AmgLGpE72gNRAAAAAElFTkSuQmCC",
    "title": "Ant Design Vue",
    "desc": "Ant Design of Vue - Ant Design Vue"
  },
  {
    "id": 7,
    "url": "https://www.iviewui.com/view-ui-plus/guide/introduce",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADE0lEQVQ4jXWRTWhcdRTFz7n/9968mckkacskrZaY0mIpiCJt8avoUIcs/EBBaosYN+JCRCguCnb1QHFfRIUudSEaQVAqBo2NEYliAxYUP7BqY5pAJkzG+cjMe+///18XgYqiZ3W4nN/lcg/xP5paaJ7yaf6wH3gHF8x89mj1w//Kyb8Hx764uqO+0Hgf8G8TfEICM03lB7W3Nl4FACTJPxhz3SUqqJEHJ46+E5Yqj+StptXceZdap2mmYbjjzhvvOy3LZx68iCQRzM8rAPA6nNAfn1+dLpRKb2atzRQwRtWrWlLboG6J59aQpOv2/sWXqp8DSoC6vQDKO75qVob7+ZLv+Em74XLfQUE0Fg4BGO7Dd33GTjlyDVz+fW5w18ri3gFAFSQqALXUGpzWXuGAXcsc02KR/bDtG/JR9k1wIVsKm0bKkXO9TKR428Sx4HmACqgQAO6+sHpTrPKt9uwQszDIN7BgB3x68cWxXwDglsOt/SMPDc4H4+Z4fsVZqbKt9e7tXx7Z/4cAQDHEC6YQjyo885auL38sp7ZhJaD8bmn0SmPNn0SGa1ClSLQzapbPAlCpXVybJPmk7f3pxJRNtmrmrs5W13BCzfaZVJxQ8/P5GzYg/ETisnFZNyXw1D3vLR8R49wzDMKdKpprRvgeMwDADPTvtme2X60uIwEZQS4mKBbK5jmhyEmXDZRg4LOBp/Le8enLZYAeNQ2QaICZxx2S7yN4U/Nx38sujVwvVQjqojafpLMKhUGYWynIvsmxiTcOnvmxgnlaJLSHL10q1fZVX2OkN8ue1DLQUK0FnB1n/dOVa2qx2205L5bS/4lWN4cjlvMfvNjZYNhZM2ymSHOrd30rRRGGTlkKwAIagad5OSwXX9esI37gXLiHSNvtvmbhoWAkPiRKuHYPjLKUMQWqHiJBWBmFzTvnCAD12ZVnVYtntef3MhO4FpCvK5QKiQnGBIsCU1Ag9JAi1hH5c3MPjL1CqBKkHn33t91DUWXKbw4OaE8j14Vq1zjEIEsqGliaOEjNSOHXfsC5rx/btQIAfwH8i4wIXO7vxQAAAABJRU5ErkJggg==",
    "title": "iviewui",
    "desc": "iviewui"
  },
  {
    "id": 8,
    "url": "https://bootstrap-vue.org/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADAUlEQVQ4jX2Ry2tcdRzFz/f7u3fuPDMTHCsZtIk4TdQEpTYtheD0AV1Ei5WIVOgiiOKyFOxKs7hVyNLispb08QfYhQ1ko3VAkNo0hJjSVtrGxNJmEvOc3N65z9/XxXRoC8XP+pzzfRzqKQ7k+noqVxJGsj/Sfgwwi9ZwH3mkYw3RgDIYmVxKAAAkWnFCBaE3efvO1YNq1b0fvNL+ZpBSmSMCaIFmIsKHxyp08P1d2HugD22FNObv1MAGA5pERYT1+tLXf8xfmuTSF/uLS68/+tjpCIAkCJGAFePQB3tkduoefv5pEkc/PyRd3SX4TgBKMdU7PFrp9T4rDr3bYbR1d3bmu7v2b6UN8eZjKoxpkBZxHJdL21+U4ksF1B6u0vLDNW1aBq1/ohB05STfeG1X/Jcq8e2TF6d0FI2ZVpL9Mmu3XwEeCEyytenSwt0ahWEkPa++TBt9GsEOpU0ryWEYjc2evDjFAPDg+txoUHeXTa3Y3ae0bidkLAvr/27J/b+XpS2TRvsb7agPQJtQHNbd5cXrc6MAoGCDN7694ZQO90dWW24wTOkYIlx8kEL3O9vx9p4ybv4+h0uNKcjOZGzANLyV9ZHZEz/8AhtMAAARwqcHrH0fVa6qbPqtuOHr1GmH1WIMARBuA4Iv81qlExw6/p+//Vjdi/O/+iASRrNc4ELVa6xtjiDSJCkSOZJFNptGLpsCDxUgaRJEmvy1+gguVD2gOZsf+wU2+Nrw9+OB446bZBmNXoq8ToHXCTR6EZlkGYHTGL82/N04bDAI0vxBiyoIgLwwUL6ZKOSHSZERFxlhWUEKiiTQ/tbcP8dqE9NLLe2TDZpo2ODp4+dmgg3nrDISKiyRDkuklUqooO6cnT5+bgY2GIBumZ4OAGxoCGhxZmE0qrs1RYoVKY6cRm1xemEUAoL9xPzsCS2oWWvH4d2Bmc+8B8XkrWx+dePEmSsgMKrN1f8fEcJg2apctm9VLtu3MFi2IELPkxrPDThFhAn47tDqNwCAibs+ThG3Hvc0/wG0ZFyn4H0DKgAAAABJRU5ErkJggg==",
    "title": "BootstrapVue",
    "desc": "BootstrapVue"
  },
  {
    "id": 9,
    "url": "https://code.z01.com/bootstrap-vue/docs/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADAUlEQVQ4jX2Ry2tcdRzFz/f7u3fuPDMTHCsZtIk4TdQEpTYtheD0AV1Ei5WIVOgiiOKyFOxKs7hVyNLispb08QfYhQ1ko3VAkNo0hJjSVtrGxNJmEvOc3N65z9/XxXRoC8XP+pzzfRzqKQ7k+noqVxJGsj/Sfgwwi9ZwH3mkYw3RgDIYmVxKAAAkWnFCBaE3efvO1YNq1b0fvNL+ZpBSmSMCaIFmIsKHxyp08P1d2HugD22FNObv1MAGA5pERYT1+tLXf8xfmuTSF/uLS68/+tjpCIAkCJGAFePQB3tkduoefv5pEkc/PyRd3SX4TgBKMdU7PFrp9T4rDr3bYbR1d3bmu7v2b6UN8eZjKoxpkBZxHJdL21+U4ksF1B6u0vLDNW1aBq1/ohB05STfeG1X/Jcq8e2TF6d0FI2ZVpL9Mmu3XwEeCEyytenSwt0ahWEkPa++TBt9GsEOpU0ryWEYjc2evDjFAPDg+txoUHeXTa3Y3ae0bidkLAvr/27J/b+XpS2TRvsb7agPQJtQHNbd5cXrc6MAoGCDN7694ZQO90dWW24wTOkYIlx8kEL3O9vx9p4ybv4+h0uNKcjOZGzANLyV9ZHZEz/8AhtMAAARwqcHrH0fVa6qbPqtuOHr1GmH1WIMARBuA4Iv81qlExw6/p+//Vjdi/O/+iASRrNc4ELVa6xtjiDSJCkSOZJFNptGLpsCDxUgaRJEmvy1+gguVD2gOZsf+wU2+Nrw9+OB446bZBmNXoq8ToHXCTR6EZlkGYHTGL82/N04bDAI0vxBiyoIgLwwUL6ZKOSHSZERFxlhWUEKiiTQ/tbcP8dqE9NLLe2TDZpo2ODp4+dmgg3nrDISKiyRDkuklUqooO6cnT5+bgY2GIBumZ4OAGxoCGhxZmE0qrs1RYoVKY6cRm1xemEUAoL9xPzsCS2oWWvH4d2Bmc+8B8XkrWx+dePEmSsgMKrN1f8fEcJg2apctm9VLtu3MFi2IELPkxrPDThFhAn47tDqNwCAibs+ThG3Hvc0/wG0ZFyn4H0DKgAAAABJRU5ErkJggg==",
    "title": "BootstrapVue",
    "desc": "BootstrapVue"
  },
  {
    "id": 10,
    "url": "https://quasar.dev/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADQElEQVQ4jVWSb0yVdRiGr+f3vuccOBw4EmfzjGrlktBKRqVQrRjgKkAozLBsteVYLVe2WavMPkQ2zWXMSWXlnLVaadnqA3GA1pKYY0J2KFJJQESDpmH8yQo4533fpw/Mf/fn+7q3e7uEC1EBUfaMZpMeWYHFUpJuFNRg26cR2pie+IrlmUMXuoDMsiqIKM36OI6zXnrac6WzCTk7Ap4HWVG8gmXozaWD+Hz1lMuOiyN1agCI6SZ2D6kpqFYfJKyFxY5sbHLN1naXwgccPyTs/HJl54AS0wbgIkuTPsauQbXm5joBk5q0sVQeeU3pVuWdbi9QcL9CioLl+LLmJXnvNyWmz8xe+EKj4k906IbKaz969kFv/L8pa923Q2qv24b78SbJ643R8vVn2tLWgS81Bc6Neau3fCjOltYzmpp2l+Wrrat1D8RWlf3zk7t1+zb79/5jum8Y8Y8Ni/P+00QiUf6dceSG3OtkeWWZ5N262PS2tbi/jmnYvj5v3HaUUuKtmhEI8NfYOKSE4PPNJIIBsq9ZwOj4JBvrNkAwyoK8RVr/6osSyZwjxFvVrXi0CBqdTvvOVR7gvvL6m96JoVOaFo7q3Oz5Gu/u0b6BQc2Zl6tmYYnS0K3cVuNZiGtuqVL2TfQZFBH1RICD33+HNzPFkoLFuOqRnhEilBZEUlLx+uNYGVdg5ZVgUMTMGmBjW2fcUKZH4QptK641Jauf0+TAL3L2z2HK7q7ASkmj7/hJwibJZPwHleoa4fB+Ty2/Egz/YaO0a/7SSrP/U8ctLefUjUXCoVbsE10c72qDo53UbX6LK4M2T8RHhWgENbZqfokAHQabvVpYMcy5cSN7d7nm5M9qiahT87ISCrPmyTW89PxanZqeUgQ1Xza6ZmRAtGjlKMon50V6ig+OqR2Zn/RLwDEmTW+6415tbmr2VFXrt+9QSFW/P8Oxw9lJ3u5RmnQ9l+kY0wZ29qt/0VIFEiuXVbqDvUe8w4e6vIfuq3aBhC/nduXdI0pMdwMWqiJcmpiuJTHzgvzYfDUHv8GaHMUSwUnPwltyD1pYdRpfsIEqeeM8cvkAQON0Dr7Aw3gU8/fEVYAQmjOCxQGUPVTI0Uvr/wMm54DMqMfJwwAAAABJRU5ErkJggg==",
    "title": "Quasar",
    "desc": "Quasar Framework"
  },
  {
    "id": 11,
    "url": "http://www.quasarchs.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADQElEQVQ4jVWSb0yVdRiGr+f3vuccOBw4EmfzjGrlktBKRqVQrRjgKkAozLBsteVYLVe2WavMPkQ2zWXMSWXlnLVaadnqA3GA1pKYY0J2KFJJQESDpmH8yQo4533fpw/Mf/fn+7q3e7uEC1EBUfaMZpMeWYHFUpJuFNRg26cR2pie+IrlmUMXuoDMsiqIKM36OI6zXnrac6WzCTk7Ap4HWVG8gmXozaWD+Hz1lMuOiyN1agCI6SZ2D6kpqFYfJKyFxY5sbHLN1naXwgccPyTs/HJl54AS0wbgIkuTPsauQbXm5joBk5q0sVQeeU3pVuWdbi9QcL9CioLl+LLmJXnvNyWmz8xe+EKj4k906IbKaz969kFv/L8pa923Q2qv24b78SbJ643R8vVn2tLWgS81Bc6Neau3fCjOltYzmpp2l+Wrrat1D8RWlf3zk7t1+zb79/5jum8Y8Y8Ni/P+00QiUf6dceSG3OtkeWWZ5N262PS2tbi/jmnYvj5v3HaUUuKtmhEI8NfYOKSE4PPNJIIBsq9ZwOj4JBvrNkAwyoK8RVr/6osSyZwjxFvVrXi0CBqdTvvOVR7gvvL6m96JoVOaFo7q3Oz5Gu/u0b6BQc2Zl6tmYYnS0K3cVuNZiGtuqVL2TfQZFBH1RICD33+HNzPFkoLFuOqRnhEilBZEUlLx+uNYGVdg5ZVgUMTMGmBjW2fcUKZH4QptK641Jauf0+TAL3L2z2HK7q7ASkmj7/hJwibJZPwHleoa4fB+Ty2/Egz/YaO0a/7SSrP/U8ctLefUjUXCoVbsE10c72qDo53UbX6LK4M2T8RHhWgENbZqfokAHQabvVpYMcy5cSN7d7nm5M9qiahT87ISCrPmyTW89PxanZqeUgQ1Xza6ZmRAtGjlKMon50V6ig+OqR2Zn/RLwDEmTW+6415tbmr2VFXrt+9QSFW/P8Oxw9lJ3u5RmnQ9l+kY0wZ29qt/0VIFEiuXVbqDvUe8w4e6vIfuq3aBhC/nduXdI0pMdwMWqiJcmpiuJTHzgvzYfDUHv8GaHMUSwUnPwltyD1pYdRpfsIEqeeM8cvkAQON0Dr7Aw3gU8/fEVYAQmjOCxQGUPVTI0Uvr/wMm54DMqMfJwwAAAABJRU5ErkJggg==",
    "title": "Quasar Framework 中文网",
    "desc": "Quasar Framework 中文网"
  },
  {
    "id": 12,
    "url": "https://pixso.cn/designskills/material-design-design-specification-usage-guidelines/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC/ElEQVQ4jXWTTWhcZRSGn/Pdb+6dn0wSJpMm1YCh1jYtQiKNWNEKFVwk6sJFU0QXMWDdpCBVhO6m4EKooFArrdqsVDSzEKRp1IJuXKjYUkpbU1ttERR/0pK/+blzv/sdF0k0LnzX5xwe3vO+wppUERGUDdIXzh8iyD5K2twD4rHheVxSlZNDJ9ZnRKf3BTJWTTcu/jGxsKXNLB/LZ2qjmBRc7EAgCC0ioO4MLZ2U9wZvGBmrpnpgV0aPTQ5oBbMTbVus2TMivaPLrSDBech2WKIOi3eQNFtkS6MYd2KV4M39k0h2QunYIU1/6Ye5Zz689dfu13sKdd+VdzZj5m8W7OLHBlBkv9iwH9eKsWFE2jxkQbYT5e+TBe+x5eEdW05v/ma57/hCs+8gUrvZaYuPtZ+6+zqAPn9hCp98jZgSGEXNiJEXPzrIUnqcsGBouAZSunP3zg8eccHtmbn5wslN72+6fm1EIx25Fsm7Qz/i/RRRMcA1PHC/UUXklXcmafA52facNjVGyoMP3vPZtsH+82cBtrZdUf780q/5XkQVBAUtioIAcPhwmWxxFlPepSsSS9Ad0ZQ5mnavvP347wBLE1cfbouSWVGXQwKDT34WAGX1OY2X3rorm/dfoN3btJ6JRUoRsf2JJD+d+LBkRMaDwEf4tEUmH5LUXw0AjqwdGfltZvNC3H/HA+UreYl6e7WhTnyuTNi1J8jYYZPWA1Rb5DojjWsX5Pv0WbOWORHQocFa5nLQ89zRX576jtrtGTFZi+2AeAlaS2AjIWyPXJyec+TG5dxwIhsT+PS4DrQFetEhmZZyupK7dHWrpn2k+lCiphD78IbX4JM3Tv36WoW9DsCuE4Co68IsW/GCajYnTxyo3Vv96qi8PDcxV2QeBj7dXgdJV32rGKHi7UaClS4IQ0AljbPYzkLaUlRkSpb/Kdi+6UCqY6lQ8f8SKCBQ60ZdiNgOrFvksm8Pzgqi64QAUh37T/FWD6w5kfZg6paVAGbjEke+fVJurZeW/9Hfy5FECh1zqdkAAAAASUVORK5CYII=",
    "title": "Material",
    "desc": "谷歌官方Material Design设计规范使用指南"
  },
  {
    "id": 13,
    "url": "https://www.creative-tim.com/vuematerial/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAS0lEQVQ4jWNgGNkgOPfffyZiFG76H/kfm2YGBgYGggbg00zQAEKa8RpAjGacBhCrGasB2DRfYliGy6GoBpCqGcUAcjTDDSBX8zABACNFMbJLdFxvAAAAAElFTkSuQmCC",
    "title": "Material Design",
    "desc": "Vue Material - Material Design for Vue.js"
  },
  {
    "id": 14,
    "url": "https://www.huohuo90.com:3005",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACJ0lEQVQ4jb2TMWiTURSFz73vvfxJmqBSOihCKYhSETt00LEginYUq05KwVl0EQWhrk4udXcuFER0UaTYgmSwLoLVjqLi0Fq0SZP//9+7x6FohwYXwW+7H2c6nAv8Z2S3mqLre08seIAKTDmMvwk7gTm37amYoJfRS2v3na+etNQrCQyUItd8ilMu1C/Q8g5cFhjzL183O1cONAceiPoxY4wq3ieL7zzonpHxVmgMomivP4X5pqtUZ0QEkAzq6yhSsby/UZ321cGrVrbhXABTCaEu6crcvsVkcTaVOYoUblYkn1H1sNjJAVjMN1ZU8Ek03Ga5mSwVBc1IpkWDrXoAkifOcuvH+6DuuKvsOWtlO0JcgCUa8FzJU+qqQyl1k6gPZLEJs5aKVndaHWcYPbLxUTUbZuqauppPsfeagpaKXieoICkanKXiCQQt/GkTwNFDa3d9aI7QugninKVeB5QFIc9AvRejqQY1Kz9DZFkpGWlUQDhyfmMYzt+wuGWgiGgQI19SOCQuHKMVRoECJgBeILEkTNWUCoBZKGfU15u0shAJjjH/BshbCCYFmmAs1deVFh/D0BKVGsVHE1JHL36f9FlzGjTR0KiKihB8KConfGXvQYJOK43MYrcbC9wBmEFQhTADmXkIT8PSK0u9UjSr0fKlLWK+ZjyXyp/LtGROfAWWHq3OD304fHl9TIC2WKRB8t1T/s0EPXBPt6c71z/TH/Z5mL/5f+QXKOAvi1OCgcUAAAAASUVORK5CYII=",
    "title": "Yike Desig",
    "desc": "Yike Desig"
  },
  {
    "id": 15,
    "url": "https://arco.design/vue/component/button",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABwElEQVQ4jbVTO2tUYRA9M9997CNm12CjEQw+GjvxB0jAQhGbSNYgbMRGECL4AEFsLikCaWxtlIBYrYJWgiDYqOmzbBA7UTAouEp2s3fvvd93LK5iNGaDAaeaYubMnDNngP8flO026t/zf5l6480OXGlXB22yETmKFBDqheSSfDy0JJ+Hl/V8egsQAtEWm0w2DADgXDyDOomzJGok6iSmOJsP2IxOlKOXXz+d1ssxcZoOUzZFzWWYdImZJg9e6938k06eEAIBK83HNS3xQfahrJ27x8BOqAgclcr9o2uuUin4Sa97vTk/fDsHEcrP5lLr0ZHQ+C+Z2KKEsbPvRmT1/rhKP8DYaNdWyw6ZFahfMKm1J1pzhWcARYGGAoBn5RRCvyi0CdcC5x34pqX6Ynvf7mRlZ8WYNKMDXCbGc+rSiVwzqALLBAB6aEFVqBpK2fdph3o4+ra2pxgczxh88gpDPkR99aAAmgCAh6BCIgcAq4fPPGEnnhVjVgBZsml/orvr4vNX89JiFp8k3aIY/ZLG/Tvt/td7PyR0G6/xYqGKRhTk4lJ+KR7p3qvvRwb7gOvcFq0zzW+33/o3BhRs+7E2j+992L26mp4/8AAAAABJRU5ErkJggg==",
    "title": "Arco Design",
    "desc": "Arco Design"
  },
  {
    "id": 16,
    "url": "https://www.radix-vue.com",
    "icon": "",
    "title": "Radix Vue",
    "desc": "Radix Vue | Unstyled, accessible components for building\n            high‑quality design systems and web apps in Vue"
  },
  {
    "id": 17,
    "url": "https://www.shadcn-vue.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAVklEQVQ4jWNgGHjAzMmOzGXCr1rK00SrNJhYs6U8TYx6U1m42IlQS1fVLNwcAnqKJKg27kuTcDYgQbWkuxEpqt1wqGbmZNetiyLWbEwgoKeI092DDwAAF2UYFJKG2MQAAAAASUVORK5CYII=",
    "title": "Shadcn",
    "desc": "Shadcn for Vue - shadcn/vue"
  },
  {
    "id": 18,
    "url": "https://ui.nuxt.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACQUlEQVQ4jZWTzUtUURjGf+fcO+PkxzhZLTS0L8OcMEghaCG6ifoDmp1QLQMRCaFaOB0nosI2QrRrUe1mFbRol0ZtBGfZaGmGRBGUijPqXK9zz9tidFSyr2dzDud5Px7e87ywG8Ro0glnV+4foH5z/w/MpjqZTJ7f8ZZOOIjRf+82ZeoJ63doXQ1yisODkxg0BrstTjaTtioas0mkqI7EiIRc/GC4xGH5YFLMmN7tyVtdBY3C8t6coa5qnNzqC6z8oCF2ha/z3QQqRmPdc5Y8KBQ6OTb0dlNVScGQAUHhqAeIBPgygMs1ct4Sbugx4dAI3/MLFIM1rB5GUGA2FIjRKGOZGuyhcd8z5hZGiKf6N+bRR7RihLALi/keoJnG/Ya5hUu0mKeI0QpBMWNqCIeyIA4sx2mKLIERPt1po8rJkPMmOG7O8vF6LW50EhD89VaaTV6jEKzcpL72IJ6f5NC9RbK4KITi+l2046L0AKPG5ej9HIW1QeqjDcANFKKYNnEqKzIU/Nc037pQHu9UMkFDLM2X3BNazeUdnz+TeklluIvl5Q7F9NAropEu8oWHoDOIhBBaqHAHUDJPUGxjbXWFUM1FbKCwKsCRdmr29JL3Rl0Up7GiiVb2Ed6wfyCw6k+w4vVz4vY3ps0jmvZeJe+BVuAHEFhAtbsoOcfKegfW+mglWFGEVJYjyfGSRxIOs+oNn+czWIqgFFYUWocp2syfd2IX7/+6C2I0Y2i648JYtuTMbizK2HJUOuFw4KQqx5RP7E+2w+rFWEa7WQAAAABJRU5ErkJggg==",
    "title": "Nuxt UI",
    "desc": "Nuxt UI: A UI Library for Modern Web Apps"
  },
  {
    "id": 19,
    "url": "https://ui.shadcn.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAYklEQVQ4jWNgGHSAGb+0np4eOzv7x48fiTLMxMTk0KFDIiIiJKgWExOjvWoLCwtmZtxeRVMdGhq6fv16nBqwqmZnZ8euWk9PjwTVDAwMcnJy8BC0sLAgoBoNMDMz4/PoIAMAXbMm1LB7cRUAAAAASUVORK5CYII=",
    "title": "shadcn/ui",
    "desc": "shadcn/ui"
  },
  {
    "id": 20,
    "url": "https://headlessui.com/",
    "icon": "",
    "title": "Headless UI",
    "desc": "Headless UI - Unstyled, fully accessible UI components"
  },
  {
    "id": 21,
    "url": "https://mui.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB2UlEQVQ4jYXTz4tPYRQG8M977x2ZQbIislGUvVhMTcqvjY0yKUnZoFgoG9JwZ4YUI9lQisWwMwsTK8ICWfAnsLAiqZkx5htm7j0Wc2f8mhnP7u2c8zznPOc9QHfkysjMh7/j3ZET6d/EMrI/AguRNkjKKNROqzxzIb1oCgvUylQ376NqE/rSHd2R2+gw3upLjzMt7ejV5qkyBpyJtco0pUy1M9GlNx5a5oZkN9horzWuCzuh0CGpfZJZqcNJ4/bpicuSDQrHtOG7Shhvuq6NeIO70wQtYbFFapPGvJTbarlrEsa8V/mgwxZJgI/uu5nuzXiQqdUo1Ebkdqhs1vLEuFsmbJL0yxtluJkmHY/Vylg13cFSSQj8QKE/vcb2WZt7Yikq0dD0RKclHmi5jIuZr0JoF1b8sboyMr1xSOaiXIGiiXVa1uQiM5Am1PZjENPul7FK7ZE2t+XWGTMsc0mZarkvKlMzIxXgfBrC0Kx6Zb1Ftqn8MOWUvnS16Wq7cASFpOMXQRmZUigbpxk15Zt2i0064Gx8kXRpc1CBUc9NGp7+iXMiMj22yJ3TblczLC3v0O+cQVIsQPAbemOPzAmVV8YNuJI+NyJphmRuzHdI3ZH/V3TOgr8vtcFPIFy3mkBsQH4AAAAASUVORK5CYII=",
    "title": "MUI",
    "desc": "MUI: The React component library you always wanted"
  },
  {
    "id": 22,
    "url": "https://v2.chakra-ui.com/getting-started",
    "icon": "",
    "title": "Chakra UI",
    "desc": "Installation - Chakra UI"
  },
  {
    "id": 23,
    "url": "https://tailwindui.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABmklEQVQ4jcWSMUiUcRjGf8939/317E6yEHNoCYXoDCLEoM2tOqSGskEIJEJoi8akEGoMN5eQIHC5Ggq5s80tCCQivQhOWhosjkrs6Oz77r7Xwc/yDCVo8F3fh9/7vDwP7Pdo142ZmFt2AJzvCZDsnwF+oXQK7BpSXwxbwqKZMHfyzU7QXwC/UDoj8QisF2jdtvqEdDs4d+LZb0ix3NIMWFjw/UrrqLBKhH1W5F2RGAPaAAy+IN3zE4nZehgcNk8DzYD5+SRr3SkuHv8BQL7kXNpuAeNAOlYFwApoDaIHfwD5V6m2g4c6AH6ufvvO8NnalitXSV3C7DrQs+lEH4WmgurSrMjnEy7dN2TYTWHHYtwy0nTQWXtOf3+41wG54uJV8O6AtQPdgIshVeB+UNUkw9kAgBcfMrSv1BgcrG8ZT5pIK2qMJH33NWw0hjCbEHTFP9/1D1iXzb176qEjRr0zzGQeN8dYLLdwofdXnLfcy/eXMXsIHN2mWweVzbgR5rKv9+wBZvILi6eRN9JUJPQkzGXf7pT/d5X3fzYANSWd0Uy2s8IAAAAASUVORK5CYII=",
    "title": "Tailwind UI",
    "desc": "Tailwind UI - Official Tailwind CSS Components & Templates"
  },
  {
    "id": 24,
    "url": "https://zhuanlan.zhihu.com/p/694048244",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACcklEQVQ4jT3TTahVdRQF8N8+59yr5numZlmgQVQUUaOkkUKDoonRQIIgCMLyQYOa5CxMigZBDjIsIiyKjIqmFk0alDxq0CTpSUEiWYZUfqX3Xt85578bnFeDDXuyF2utvVbYn2PFS8aeFtbXI/oKFWqhQb0ylTQSav8Ib/vZC42pV8x5XidV9DNcI2MkhMxOBJCIaGVJ8+btdbsS9uZljTUqqVbvukd+cZLJFGNpLMT/jGikBqtQudzora1CKRPVw9vkwYfY+TFlAxrxyyW2rmf1eJDQhzhzlb+uSo35RqcgdPLRu0RTc/Qxevx6niMn2L+ds1OudOLODeL14/LFYzTrqKITZcrNm8WOW9j1AUtnefUbHjzEyXP8ORXbj7DjXb48JTeOhVZET5UdCssz7jvAsUVKEWcuMPmDi5PBwOmM9gpXe5kpdWQnGzkATGbs3sEN93PbJrmwTdy7SV7AtGWULKesioiCjuhFE5XMZbFlHXdfT92wcQ2/XVDmGtEWSiF6tEKuPLRFJ6tMjFg6ze435MKHXJzx/nfiucPy6BJrR3TLw0FfBsY6sheVHFBHYzTsfYDzE3loF089IrqW1Q2lZUSsbVYYdERHI2SEaK9w041i306eeE+c+pvPFsSTH8lrV/H9s6Ivcut6XlscjM2WJggtW67j02f4/DiffEu28uBXnPidO17m8OPywNf8cIZZhTFdq4rYkxezmNu8gVs3icWfpEpEkP2wq1doVysRbhRjhFmVvbesVp09JxZ/lOoh+2nwRAymRUU16E9FpVbrvNm4ZJ9KrbGnasyV8l/vkEMjFZFl0KwWKudNvOO0ff8CDNsVBiQlEB0AAAAASUVORK5CYII=",
    "title": "聊聊 UI 组件库",
    "desc": "2024年了，聊聊 UI 组件库 & Headless UI & shadcn/ui - 知乎"
  },
  {
    "id": 25,
    "url": "https://opentiny.design/tiny-vue/zh-CN/os-theme/components/fall-menu",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABeElEQVQ4jcWSvWpVURCFv7W2IkI6i4CCj6JFfAEJKmhlo2BAsFOws7GImDYodnaieQWxsbBKYWEj2ChpJBZC7jkzY3FucrfeFBaCU87PN2sNA/879Gei3nEeWMtiTeKSxGpfz+RZu8CtJUDtcJ3gJTXPVtdR3QLxBfNJybbWefVvLFx78K1mQ1JVWLr3evPsFsD2hzr5+f3Pm6huPN5YuQhwd3O/JGhNWOLEIUWCKsiqp7cffd8/dVovPr79QbOwF6caxkSCCLA9AdxES5E5mZ1lpMeGVIRFN8/BLGhNSMKOOUCTAklUFQcR6WEadBPqAMOYjAF2Z8E2zTAqqAKCHJQTIH+3MBsCS6gHSCBP1MxijMoisIyV2O4AebTdZgI0Q2jhNaoih0IumoUyFn9QEFEEhcTCgh0T2aJGMiiI+RG99LBHMAM8f3hGlnYnWcJUHjZlFuOYS8OCXamtLqGv3v9aMdTloN70+Z0n546XcVxcubO38re9vwChFKMs4F1GBgAAAABJRU5ErkJggg==",
    "title": "TinyVue",
    "desc": "TinyVue"
  },
  {
    "id": 26,
    "url": "https://primevue.org",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACXklEQVQ4jX2RT2hUZxTFf+e+Ny+T0ZgopUXFoAGpGKppXQTNJpFqGoqIhVQbFyKUrgrppkvJIG50VXEluJWWZlFciKKkxiRoW0QR/1AUqgtBiGirYzAzme+7XcRMkjF4dvdyzuHcc8UCfD4w2Iv0G5n9MfN1yzZBE4AHv5/7+b+1jj8LhJ2jZ089mdMYwPorxXzXge/XROxH8Kde8RtW9XN6C5ssX4owDFRTJUfo70+6rxTz8wbTdid36MO/1aw2XM+FD3Bj6l+A6P4ymZhqMXw7UA7rs77ubz8pMW2/AqQAco1jHPaOQpONT20A0MOZ9tAZ79k0f1HWV5KaMWBrAbmIMF5L4NJVAG/NiB8ks7fJe+xFHLHrr19JagaImxqgKcHdPUQfqyWoWPVC5jrp8iY+LezT5dJKSZaOlKZi2Xdh4HkR2xufhMjlxHxy4suhP2sJMlglbFDR1nmrtXnKN+7xoleCpFiG+IsXvC8mM7tN3iuS/Yu+MAeZdlG2W9W9LRvJWSvQAZTC6qy9+kXLDiXZhElrFmpS6uDOP2rkYNzS+HFy881mF/hnBaIxkbpW1fMNoAIvHH82+xGCULNvyuMrDN/YACtTUmw5mhVFjw8WGVzrLU5GVTo9cnfeWoTOZYStjYsTirPKx73vdDDWe+wRFs9jGqmxP8qhhvmaooczMfjvoz3F6aU7cLokHtXfCRDBJdsj0+N3OqgNWXIgyksuQr2BHJdrjCwcX7SvJ247/V1ueeu6H0ycqAVzn6kGtqfL4u3RnmL1vQZz++4LR084vuPt/NPVvqHhpYj/AwzU8EAO+m4qAAAAAElFTkSuQmCC",
    "title": "PrimeVue",
    "desc": "PrimeVue - Vue UI Component Library"
  },
  {
    "id": 27,
    "url": "https://layui.dev/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACZ0lEQVQ4jXWTvYudRRjFf+eZuZ/7xpvsJks2ET+iLhoIq1FEoiApgmBhYWcK/xDLRLC10sImbRBBazsLK80fIIjECFoE495sdu/HO3Ms3rvXbXxgeIqHOfObc2bU/PDt5VGkW8xm72E2sAEQyF3HNkjdAGwbNRs/1rb9Kg/RZ8r5A7e1IihAlrCNTnbWJYFZLt+JZft2MJu/X6ePWyQBbKTEohStT151dTDHEsF8UbAJmYydktB+u+DT3T19uPOMHy3mJOnkuU5IsRKSlAQEwgJJ4VKtn6ePfHt3T6d7fZbdrTqKWrXfLj2v1QF2t4hjdbsqRfjhfKYLow1uXnye6XJBUmCb4sqNrfO60B/qsG0VtrAVArlWrSxQElSbjy5eYpwzANO25ebOc3z35nW+eeNdmpxpO19WBEBnswkFAq6cOs3LzYSj0hKC1hWAsobvKv8Xk8FrxxmnxCvNhHv7f7PVH3D3r9/55cljfjs84LBWBhH4JMFx1q8+dQarA3p9sgkrpxe1sttM2B6OqCua1UxGcrEZpuSrky3kzvudwZgcohfBshY+fvoSt3b3OCgtsYo4dyrooLR+cdTorTPnvKxFEcG0XXA0O+J+WzjbG/DC+BRN7vlyM9Ef8yMPUyZjQ4RdrU9euuJBSuvXc33rPF+8dg0hnh01bA9HALq2ue07D37VOPWsc99/7VpK7aekG2d3OrRqIRhEokkZA22t7JclofBP/zzUg9kT9xXO7uV7Keery8Wi3P3zfrj7ABJQcRcbIEQKGYtRSu5HwjlFbuHzXsSXkkabvT5ebf7/EqUW1wgp0p1/Adl9JnCitu7BAAAAAElFTkSuQmCC",
    "title": "Layui",
    "desc": "Layui - 极简模块化前端 UI 组件库"
  },
  {
    "id": 28,
    "url": "https://www.bootcss.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB8UlEQVQ4jW2Tv2tUQRDHP7Nv73K5iDkjIooigoeFnVbBWFpYiFhqI2gKxX/ATkQRixQHYiNpYqNlbCNYxSJai97JGbBIIJeYw+TC/Xhvx2LvrXucA+/Nm9n9znznx5PaEZ3D6CJQdahxgENx6rXm9qh2TmmAm5faUdcAqiMXVUdAY0E02HUbgzMURzrULsoqeDGoCjoMquh5i/9AgYwBlx5mXH0yRS5pV9n5lfLhRYevy4JhYgj2j40NpxnOpAAs3dmg+wdKFeHyfIVbr6dZ+Nbid90gFEJSG9FB1QcBaK526e2WUBybjS0efTrDqYtC63uGERsw1kVgH8qLimAooMC5uQLZQGmudUGKw6ZGJbjIkYd4sHwSlwp2Upg5bVm6v8FO01AQCdldKEH/OXJZe9emvy9MHUuoXilxu3aCTmub9VVForJNDtZoGgBf3u7z+c2Ajwt9Xt1osbXe5/rjwzh1I1MwsRGXgIDRAglFhCK9jmNyOgmLlTO349n9+8K1Mv09AZSzs4eozpZZebkbtjJnbuN1VYG0ZzhoO24+PR760d5Mef98m5XaHkYqI1OQZzMDzfc8Y0BfD0g1CxfyM88wwcgEqA1+q+gPharnkGCljPn/Hzis20SMtW5E5a6iP0MTNQEMMK6VBD9EUGgK3PsLVyhZsU/0LHMAAAAASUVORK5CYII=",
    "title": "Bootstrap中文网",
    "desc": "Bootstrap中文网"
  }
])
// 移动端组件库组件库
const mComponentList = ref([
  {
    "id": 1,
    "url": "https://uniapp.dcloud.net.cn/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABbElEQVQ4jZVSPU8bQRSceW+5K3wWNMTgdG4oIgoHS1ZKCpcu8hdcwR9CSulfkyJI/AoUJUBz3kTa9X5Q7HEOTgOvWe3s25nZectP377gPSVlyTkLRakEc849SFCpQulB03e3buOjb6qm1irlBEAoLnrrbaXVsGpSTiQFgFJbt7m+WK2XN9PRufVWqUq13k5H5+vlzfXFqnUbpXaWSLro5uPZYnI5Hp646EmSdNGPhyeLyeV8PHPRkXxlyXobUvBx2zsWio/bkIL1tgdNUQCgokaMkD0CQEgjRkU7ML+k9O5Y315mn4BiREsgRlS4z7i7UN7UuvaXfYgpAXj8+9S6tj/aXSh7AiGFq8+rr2fLSisAPvrR4DikwH8Yu5RSTkf1oREz/zj73/dRfVjGjAyWz+ejn51OPwyOYwpA0QOQAaiY338ebn/eFdnOUq319/sfIW4Blr6XIpCNHjQHgyKyszSsGnbE+5WRY4plms+8ja8MQZE+xgAAAABJRU5ErkJggg==",
    "title": "uni-app官网",
    "desc": "uni-app官网"
  },
  {
    "id": 2,
    "url": "https://www.html5plus.org/doc/h5p.html",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACoklEQVQ4jZWTO0xTcRTGv/O/t71tgUIKSFV8JTqgBMVAdFDQhBBfMRpTjZMMLkYdHBhk0JpoHIkTYXFgcJDEwcSBRBE0IJUoUJ9BEB8IAgWBttf7/B8HKpYNz/YN3++ck/Md4H+rlT3Zklbru9z3Kbj7SduRkm/vyyY2Vjw733StG0RONoCGKkoCcyFJIa9g1SqkacwA08D30kq29lWd3T3c27y1ak/uyNDr8d7tB09famx6of51d1QgkLOhoCuHaC0DDjSmdVxESr5EGOP8oeN9qLCmLlc7c9HaMH+zFAM9uwDuWwYsxGGIjeTzKLRetx2Q60IIhr/QgzzhQjMZPd2P3WrX8b4cGJp5W3n4FUC8Ys+x+i0d4w017uRQvzU1+tFJfBlxrMkxx57+7upf39qPTm6Xt8uL40cvXNkfZRYAoAIAA0QAO8QJj20Jz6Ztbvphm5Cjb5hKgpAEocB1aos1dYdT3HW1pfl5dUuzAACRfQ0p1DlKJ8GGzhAEmU6StH8TjCTbiR9kGianTWcWgLgeWfKoANCeARCUaUgXRqyTtL11yDlwHEFFwhPeDPPzIC1ePQVV9f8AILEDAu0ZQCQKRhQgVUywbbI98o6s7kdsxTooWWChqPEulPwQ2YZJgoILAIDo0uhqtlA0bdFNzsNfewxKuBSpO8y54TzkVNVDjz8l23GlKtQZALiBLMBfISw74Wg+abW3ysCJcwg23hEFfi/MkQFp9DxgR/WzqesLmZ68DIgCEgAMS5/1en0iEH+uGP2dSBWHYRYpUH5NCY08EMKvp635RKYfA4CSnYOG/Pk5ny8Us7zaT6H5FPxOr3FThiVdf2wxJe5J27i188m3wdX+D308VF4xXFdetloDAOA+oHBk5WQAwBEo/C83y/UHsp8mZR4FaPkAAAAASUVORK5CYII=",
    "title": "html5plus",
    "desc": "HTML5+ API Reference"
  },
  {
    "id": 3,
    "url": "https://wot-design-uni.netlify.app/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABr0lEQVQ4jdWSv2tTcRTFz/2+933Ne1FaK3VotZrqJNjBLKEgphE6aIKTFNwcjKuDf8DbHSwoGIcWkVKwYBZxUWK1k+KPqdRBBKG2gmD6ok3ez++9Dlp00KUg6Gc6997hwD0H+O8hH6J8QAASAPg+EwNCPkA+iCFCoB93EbVDL6Hfbe1Lk92zUPz2Vmv3ar3Y7kd/bmqzEz0c2qOH2ejRxsm+R+WD0eiTC/T+3Jq4g7aZ5AyiNGyOITbYOkNs18qHlgrieVcVU6WTtp/uNYVlirlxvBS/y391Xkxc650esMyYiJoDw5GMYyHMUW1YvH0HkhURXgWpEyY1F7VFp8Syq7PP9AgAVBpJiw2ZY1N2rZOZx4qAL0Ey3Sy56/b9DeqdH4yvDOVz94IwvclCY57O1dudXnX8elhw1nmg+xkjWSrLWxQWFbkTGafFZsn7ABFSALCw0tfcDJK70VY0wzG3giBZmH+Tf2B9tG9Du6/SLokguZGFzp2kZ2bnjzqvsbhobSez/WX9U7/UAHCkHh0evxxWsH/NrW+IN/08q5aXPu36UyJ/AyH4vxRn5yX6l/kGvKfB7W8mkG0AAAAASUVORK5CYII=",
    "title": "Wot Design Uni",
    "desc": "Wot Design Uni | 一个基于Vue3+TS开发的uni-app组件库，提供60+高质量组件，支持暗黑模式、国际化和自定义主题"
  },
  {
    "id": 4,
    "url": "https://uiadmin.net/uview-plus/components/intro.html",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADKUlEQVQ4jW1TW2ucVRRde5/zfXNJJpOmX27S2kyazhRLqjYUFESIKBZBKsrkpV5oRAZ9EESoWlI9IYj+AC8oVVMstCZQCoIUWgwEKba02IuTMSQzVhNrIUxaTZvO5Ttn+zARgrheNhv2WrDWYhMAAEIACQBKm1/3KiX9IkIUurJliAcOwIAV5H95r/dE47bBIQAEQO4z+S5IbFhYLmtfn736zpabWIf+t69ssH7kIUfegxGvfuTySOYPAGAAkjazgSD2GiDTdZ1oqlYrCgAwIQpZUQCwEk3Iim5LWgp/CK3KpQ6WOhsCRliRyoVQ46vEuhpr/6Zi/aNmSjRmINgBMcawhPgKzcEx6/yEODoc8SUHM6V5O+Yfh2BhzmwptSZxCeXS6Xq048nxM8X3YcjBkDvinje1aPszKJemg6j+cWZ06+8A5tNu8xOsSe2uAacAoUtvpG4FMXpFVZYXq17yQGZsYU/GXHuswi0jqnrzRkeyefj8wU1lQEjBP6U0D3AI0UXTtwSQwAj/NNL7W0LZHIlzf9+tj9+uuaMkQgkVvnrxQGcRRhggyZvNyxBH7DOtAhDAMAw5ZCdUwfR8F3d3Dgl5nZb97rismoJJnUR2QsGQA4QBwFpeZhBkfV2YbAwH0aC1jpkU/g/siGtWmhqbWVMespmP5vZWVPOocuF1drXFu2g6tN0Un8XkkF2z4ABAK9rIBAkbnQoB5LY9cqW3et7/FMwS991LLb7eJxC3YiOf7PpgoW/NAt3z5oVAhCxD6FxMh08BJFMDEnSf23CYj8e7Wwu3PpwzW88UzL3TMffXmIskO5du179Im+sBQNKaaNvjHF3ggvn6e3ZeV8tEvi9yEfe/4DYN7oZ8+/GxxXcBYRjh4mjfqF8pn6CNqUcdVQcyY9dSll3PbL7nNAPGhbbyefdc7MWR3EJ9m8XQ8Vp0eBCDYTYLQh5ERNKl6/t1pfwcO3cHNtxvtXyGSbL0b6A7zXxHRcnLf7bbmZXa6lm8vmtpfeBpMxt45D1sne1nqn05Y3bcAED0n3fGzrdKT9u4e0Agqh7KMojF86hNrFhA/VwwqZPrOf8A2Xx9g9nAIWUAAAAASUVORK5CYII=",
    "title": "uview-plus 3.0",
    "desc": "uview-plus 3.0 - 全面兼容nvue的uni-app生态框架 - uni-app UI框架"
  },
  {
    "id": 5,
    "url": "https://www.uviewui.com/components/intro.html",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC3UlEQVQ4jW2TS4hcVRCGv3PuuX17br/iaDA6EwaixpGQCSY+cCAYURcSXAgaFwEhGDDoUkEUAiO6cBHcBASzchFBGBTciEaRWQQjaHQS4yKNxHQe091mmvTzPvrcc8tFoqSD/6aKov6qWtSnuF1LollSOcCuTySM1qmFAfZKi7h9hAiU3NquJo0IKNnyodTKAc96HuSWTpRwXSzr44TRpRERR1U6OeCWrXuOy4tpxOEkZiEZcDF3LGuPUxl00gGdOKdT6RFfqDNiRWX/XfDyijyaRBxOE56PI4i65GmMjoeQxvyCYtkP+T0e0h/1aBWrDNqP0THvDuXubpO3B9c5pHymcoezHhSKaOfI/QBy4ZF4wELU54Tn89XcPHrbIvWKQXvJzNLByp28V65hbILLHZ4IWgDym9HhbIKpbeLBB3bS2P40qy6lfxYiU/8V/3Idt20n+exDqKAMLkckhzxDsgxkCuY24+Z3oQsF6DWRYhFVeRgx5SqSC7pxFk/1YOMWXLGMchkqsIgfIPYOzHQFUEg6ItIFshDYegxldAEJyyg/4xvbJVBrPFWaAbOBrDqNGRbhQpuTXkZPafaKRxCUMOMBchrQKEQbRJcww5B9XspB5VjbeA8mDPg77/NGu8PesMi4WEYKAdq2oXUKFTdResduTKWCaM0zXonv6yGX8Vh0CS+5MY/HKeeeuJ/vwhovdJvkf/2EHv+GSTpk+yAzc1uxm+5D/3kaaxN2BCHfNkZ8ac7z2VSJD8Jp9hsfGqvYc2fwyxa1fTfNz0/SObGscvXKqsz4muN9y552C4IEGxTxCyUIiqB62PU6/qWrsN7j55m7OHDmffXHxCs/97UEJuS1nuWte6tsrqbIUGELfYxdQ19p07wW81H3Gh+vHVPRJEwiCnWDsIUvZHZ+mjdnS7zqNlAZnmc0avBpa8CRlXfUxRsWUbcTebMu+t/09R9l8dCqHD3wgzw5Qev/6B8YtVWCX5el2QAAAABJRU5ErkJggg==",
    "title": "uView 2.0",
    "desc": "uView 2.0 - 全面兼容nvue的uni-app生态框架"
  },
  {
    "id": 6,
    "url": "http://docs.xzeu.com/#/info/%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B/%E5%BF%AB%E9%80%9F%E5%B8%83%E7%BD%B2",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACWklEQVQ4jTWSSWsUURhF731V1V3pdLpjxxEHWsUhEBciIo5IQDGgiLp14VZx48ql+C/8B+JCMX/ACVScQCEOIeJAEohjOm2PVe9710X07O/hLg7NTBBBSAANSuhAYhnByzsSoiiCDGYS4ADBFAS86X173PmYMt+QlPekW9cVVpmM+KegmQkgZAJBONxYfHZr8WnNhRjdNZE/XTl4vHIswAASpDcj4IPoMJM3bv6eedtZ8PhTjhuDbDp0gr6frUxMVM/a8sabDwECHzYa19/NfW+zWIij1OKB1sry13o6VWaTWrq06mo93WnBnEQA07/za/d6P2ZrQ3k18gkt8nllrr3rXfeIkBL9192HXL4chADc/tBfaHAoQQ4zh1amP1ne8+3P/TVP+vtMfj6b9sFTLoaw1NfUgiVwXqGwlAx+TffvqGxaq6zol9ib19hgtGdzYYgkoNg5dTI1OyRZ/ZlU55OLJ4oTR0pQAB2ALPgsXB5AQgXRxRITxyRmqelG5t3uOk8cLjanpxuP7ivv1cYPler1UnGlCAAU4iANp9xSc63PHG5rcy2CQnfuR218Ivx6X5i5wlZFA2MoboNSbDwZRw4OOLW9MPs8r2ahPWsgVo8fCHJWsbh6DhEZTK2P4cskh0cdSQkHNkTn9xbLPS2+yl7c6Zs3UtbqKw9QBJaYVFkcISN6bwC8V8g19aD/4W4v+5Kv3xiNVJK0/XL0+AVXDjIgl2yIR2/SvIGSGEyOaH2zxfe++8lHFtVGuyvWTQI56BiCELF+hmYmgRDAIDiKEQkCApzhf6X/a/8Lpe1VTF/xYzkAAAAASUVORK5CYII=",
    "title": "Colorui",
    "desc": "Colorui"
  },
  {
    "id": 7,
    "url": "https://vant.pro/vant/#/zh-CN",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACzUlEQVQ4jWWTT2hcVRSHv3Pum/cmM/MmTaZpkkaKunQhDZTiSjH+g+JKaRe6kepaGrpQWqGh4EKEEkTdWLEbF05xmUbS0oJY3BQR0UUVMdbYadKBTqaTzGTm3XtczHQS8K4uF77f5Xfv+WDvqlbdo+3Mja8OT12/+G1x6bOpwZFQNUfV3F5EADATEBCMK5+Up8r7Til22ro9rdXuH+KP9zdZkLCLmWCAiEX9GDGA6ZuXXhfR86L6lHW6SLAalQnhzT48uZK9Y+baG6/I14OriQDGrn3xdBK7DxV9lW5G6PZ2iJxDKNFeCxNL9qwr2ALI8xpg6mp4LXNypj4ntwXg8O8rS62sc6x1525XVFSci3S0RHi4ecNnb93UUvwBbQjb1hMwrUjs21xbn5OXFCAfxzKRjmbj+yu4XM4RufWw3Xnv7uqPx3wz/txvcc681UUlMkHClnkCOqwQzES8RWma+nyx2NnYbLy89swbvwDUuVQDzleWbTknfC+BnKioBALQTwFTMLwP6pDevuKBdarHHYb0X9x0p93627x1DRyGBLBhgKiIIAiIYbSDN45XbfhrJy5LKykpKiZmYAa2J6A/B2BYENU4HZGDiAQEAzEun/BP1DcOuOATr2r9EehXiPo8KmIeNIAkcRxdOfrX9cVmrvFl5+Ls1vih6F3nu/O9e2vJZmks286X3aMKEYBEio7kHVttb1nI3Egy7dLCR+k9P1ac1KNRUpjLHjaIQpZV7v9ro0leH+SdDCtkrd6prNlacmkxjkbTnMEP3WbjxdrywY+R3hHfepBZyHbIJZGkY3FcX/9u/521s7suDNaRP6+eRLRw68kXPgV47MJv45OF/K+iOq1JgeCz2wHO/XRy5pv/yzTwYdcX08cXfy6PF8r/uFzezLhQb24srs7PNvYyulcmqlU3UFoQCfR6eWDFAs/dentmYXV+tjHUecD8B5K9Q/ClV8uBAAAAAElFTkSuQmCC",
    "title": "Vant 4",
    "desc": "Vant 4"
  },
  {
    "id": 9,
    "url": "https://weui.io/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOUlEQVQ4jaWRP0tCYRTGf+f1OrUE5RZ9gIb+XBvVtDEosqIPUN/ATyDR4BjNDUFbg0pDU6SpQ4ReEKpPEC1FFBL05957GkqRktLbM73v4fk95xwO/FPS/ckqplmzFxTWDRJTdOzTJDc+WhM4nIo5x1nB/xGwWrEnPcO+KDN/NG2KykY+0XA6Aekze14MRwpDfY79rD5LhTnnVBZL0VHL0msgMuD6d64rEyYc8jPdcCHuSCHuyHd3j3okHPIzRkXWBuzckYosS7pqu0AoYMarAR6CTgDcG5CT4LxUjKrsAF4A2hPRXVNM1C+AXICAXD7mnHfOslKN7im62Qf4jsp2IdHYAjDtqqJfb7kCWj3AlsKBUWbbMIDV7VBMqhivl5OlpDUSfpr2kXGDefHEvX18G74sp8pugFV/1wfj9Gpq6K3QqgAAAABJRU5ErkJggg==",
    "title": "WeUI",
    "desc": "WeUI"
  },
  {
    "id": 10,
    "url": "https://www.ucharts.cn/v2/#/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACgklEQVQ4jZWSS0hUcRTGv///fx9zZ3LGcZA0ItNQe9EmXFpDDwUxiEJJKIoWBS2qRbRodamoRVAQiNgiISjqTgsjKipMxE3E9H6KDwIrR/M54zzuvXPvaTEhPqaib3n4+M53Dj+GxTIMgakKjpEEQQ87AKMlnvwi9n/znCQAgE4cOnMBoOzOcAPjvMZxnLG0Pds5foCN/C1gLn3Vzd4gk1a3kpBbbEmFhwNOKjHkZM2t3/dXfss1WXoOh0EKrlO9Ja97A83XEoCV3e43rUx8yhLasgrBRAd04miK8HwNRHhfuHRX6P5Jh6TUcDykKQoVxk2bpR3OmZ3Jcl+g0lcwMpo4V/sChiEQiSxowQhgeIo6hNDRla1/sKfv9paAJ1XFbMshMMYkmRi58XQ6UzN2qHIQ7VEZVZsJPXChM5fpBK4zwuT7wiNB30xb29ejl8/ELh0MyVNFlk0EEAnVK1wrE7WE0hBrLv05t749KjMAIAOCNcNJffH2ajy1fvcn49pza8cpL02zrMMZA4irmnDNdJ/Es/cyrAApk8dCfn4395gmEABwy7mIoFbUuaa5VrMnbtlasVAl4py7nJkJKH5/dcJTdlrDTOOF8vPKQFdobAEkFIVse9WoXEybkuO+G+WvPlsmL2hU3GSxy9XkrOvvObb86ocrJSc24gfOsjq8nAvQdXBdh2v3S3VMiEdCcTmm7e7HyfrXz2bCxSXy6OTxFa1BYdt7LUk5rK41I7QYUqIcWOY70ZQdVGM04SGaANEQiPpB7oAyMP0xsO23ly8gcX4IYyB6i5W2Ku90iW/gQpJsEk981fGH8z1/5Jt05KVu/uZ/igisuxsSEQQRBBkQ+Xy/ALFPIEpY0WcvAAAAAElFTkSuQmCC",
    "title": "uCharts官网",
    "desc": "uCharts官网 - 秋云uCharts跨平台图表库"
  },
  {
    "id": 11,
    "url": "https://nutui.jd.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACUElEQVQ4jX2TP08UURTFz30z466rNGY30ZeJzszOzNPlTwj/ky0WbEgo+ACERLC19DNsKLWwtyPa2lEotsQPYAgIbiRLgclWmNl98961YJfAQrjVLc79vdx7zgPuKC2rdS2r9bs0YtBwv2eplA5GtwBAE7U0UQsAdFrb4lCpq9pLAAPCPFFrjKCI9v4RQDsMUKHg7RaK3i4DBGt3cLx/xEDRxPHaVQgAoC1liSuVhz0/netDKQ/UZh4lmwwQAPTSdO6sXB5pS1m6NsxSqTZkqecn8zasdbJylA7vmkVRamuq00uS+bZEiVWoBruTCcea2n/eYMBhvxpfQGWZE/WeE/WO47gCAFz1YwYcPR40zFTaZIDotsvm1fSV47pbbM1jckAgtA3yt+7PX5+Gta6Wqu6SaeF+4YvW+Qevtf/RAPe0td+F4ITZPnVdR4LpJQOfzVj42im6b9D7t5oLfuZeogiA4L4r5o/n0EoOlBiwIIY1Zs8BYAnCIb42dqMy34+9kQd7QvAjCIZh/uucn8/Q8WnrRpAYIJPWmjqIGww4WRQlxZOTQ0PdFQh8ZcHfONerdHzayl74CQOOnvUbZiFsDuwFh+GFjUkyb2uqw1U/Hn6JRyuxnQ47vQn/wsYZqW4PUnoZJJGPBxv5eLAxSF1vxp87U+WR9vRwkACRx/E6A0UGPD0WLzJAZrJ6YKaiAwZILwSLPA2PAxTzWX99ABX9S1rn8HCbgAwTYQQHywRw12ZL3by7RACDsAySEf1G5vw42SbA3mbAtdKTsq4n5Z3f+T8GyvZukCMukgAAAABJRU5ErkJggg==",
    "title": "NutUI",
    "desc": "NutUI - 移动端组件库"
  },
  {
    "id": 12,
    "url": "https://gitee.com/kevin_chou/qdpz",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB0UlEQVQ4jY2TMYtTQRDHf7NZIrkkoHk51EDgCLnr7xsclqcifgQLk0qwsbXRDyB2CXZ21nplsLC3fsmRC0RCRC65JHqPU9+Oxduc+l4E/zDF7szO/Gf+s8I77qF0ABDan26XP5yTf65wC3SHxDES6Ammu8uXj/wB4S1T4DoAyufJ3VpjxcUSyJGCgFP01Razx3WIAEw6KGaigGKEtKkRg5hWRHA0hgKARWjjfAuG9o3ByRO1OWvrtaRmCvr1G8fXGgfnWnkBszYh5eqE2tYYCj8GJ0/Vw8XxRosXCw2lqn2CeMD2vhXyz1ZcPIRA1eYswPTBI5av34C6DAMUUEXBgGtJSBACexhh9/sURBjkb0Icg0i2C5/Ao28TqXyUiA9wIELzbIiUitkZXG34JLpjsxw3QwCMgVIxOXgSFmQE7GV71aSSJ2fKJZrzYTrtyAj0/roSMKViov26fzGU7t8BEdxydVldoGcF0wXX0vVSGUNzPkTTtUziTtRRBFzyFgipdEKparxY/lP/n/Mznb3sav9KTUMCDal0LmczhkJEcKQiBxuWz8/kt3wC7wucHtYhMgB1iAqcHqKuK04dTsmYpw3aXT9m07IP2N7XZCb/9Z1/AXAS+qNSf43uAAAAAElFTkSuQmCC",
    "title": "前端铺子",
    "desc": "前端铺子-uniapp移动端: 项目基于vue，使用colorUi与uView，完美支持微信小程序，包含功能：聊天室、金融量化、抽奖、地图轨迹回放、电子签名、图片/海报编辑器、自定义相机/键盘、拍照图片水印、智能抠图、照片墙、在线答题、证件识别、周边定位查询、文档预览、各种图表、行政区域、海报生成器、视频播放、主题切换、时间轴、瀑布流、排行榜、课程表、渐变、加载动画、请求封装等 🔝 右上角点个 Star 关注更新，笔芯♥️"
  },
  {
    "id": 13,
    "url": "https://qdpz.zhoukaiwen.com/guide",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADDklEQVQ4jXWTWWhTeRTGv/+9uc1NbNK4dBEF+6CiocXEdLE+FkdchjEgFRmrFEGLa0RoqbgQtWNdhqkwjpLqIEywaAtS1OrYcSwVrQtVcRdaa7VWlGBpzc29ueuZh9HUB3Oev+/Hdw7fAdIOscDmxmBw/28h4LUIANQCHghz6S0ERlTBA8SqG2uOPnixkt5/qKCm9h09s9dHgmO670AqWir4b1BCtG3RY4rPoMRQgUqfS6n31XKq/yt0ETN/Lf7WlyK1rmg1qS97Oo2UlAOwjIScsCSTkpLBmaqqk9KPqvInP94896h77b7aRkxZMzEFoB4Ib17+ULnz3+WdJ67mbgGYyWTDxuIGJiBOva8yhKpDvt0LN+au1hKaFl5nbXPmU+lYAleeb+upydEDrTlTBz/ocQDQ4rrFdJU97XMLoaM5e7ujp+tzHZLTLcQ4pgqmHQqlAJ8lje/vVxROiVkuptoAINum4O1gJkLH83d1nL0UXrJ6Vd3voXeRwLReUZZkzg6OAYANAByWYYm6xGGU47RRiQhgNU/snsu33Yevt1/5papqWV1NsK/BOyluaZ8Mi5MHbFBFSgEMXQBTFHCjBkhOAp2w/1E5frcydK0Fk38O/FT4ssGbNYDhj5MstwecGR8kqBPZ2A0MHQ4yWIamkJXUbOiCJQ9da6V3vqXU3PzozwtC9b1nmZjAJN5QOFNQRyw+GRsDyAmFRLvDEEUbeFPXWBhax5mibZvqPZe6Rsr2tXfdbaqNTt3U8yKDiQ5TGP7EeCXJ66kV3AKQJZrOUclCLGYV3mueuffU38bGpmjCevhc2HG3vYQvWdJdVz5/rrHytbT94h3PseFB7w3g/pfedXo8bUcKDwYXzEpkZeaR05lNrjy/6ZoSMDDOrwVKAnT+5JwG6oUdWDgu/S90Tp/XuDW/rdSbS4KrkDiPT2fuAp055lDtBh/RgH8xtYCPRCB8z/9/Ky/DPvxPwdI96wpue2f5qay4iI6Hi6/ID/xlPZGAAIClTRAOg/sqoFuZOTcivtr7zUXV1A1HOs9/pBtsOz1dXB8AAAAASUVORK5CYII=",
    "title": "前端铺子",
    "desc": "前端铺子 | 开发者聚集地 | 前端铺子 | 开发者聚集地"
  },
  {
    "id": 14,
    "url": "https://tmui.design/com/SignBoard.html",
    "icon": "",
    "title": "TMUI",
    "desc": "tmui 3.0 组件库 | TMUI 3.1.09"
  },
  {
    "id": 15,
    "url": "https://doc.firstui.cn/docs/introduce.html",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAClElEQVQ4jXWTz4uVZRTHP+d5nve99869Y2KSMjqCxKgLIaqxskVNEkoLf+SPNmGIoWD0Rwwh7dy0MBAqSKTEwo0MEeQiRHQhTjiICw0zEgcixtF75973fZ/n6+J61YQ5qwPnez58D3wPPCm5QffeIb27Z6e+++Qtvf/87PkKjwUGliZ2a3VtmGOuw668JNcSbh4e0cUTd62zGMA9XtbW/Vpba3HeOT6ynkInqqjaHC1H+bbvQLYIADbvUyPr8WNeMqaH9BSNRt382x+QmkvY3HdqWgRgamZ8WhdvuHl6PpElQZ4rrVlH9DU6E0sZenrq/504JhQ8HAgdUlYoZAsy57FO27Kfvibr/ceGsVFeGZz61EkfFN5ZwZhF1tPF8sLIesiDlZ7jTSMtiOnONS6Aacd6DVerWDZ13v4agEIzMuo9eQxoaB5iQPU5zIRbeMAXP8zYLMDBV7UjNDhVlnDkTU3HNgdOzNgt27633OpjOEeBH56DRrtvLgRclXhoMGuOSyq5HTJa3YrTdXEMo3n5KuMhdsLtzNFzJc2igSyJvGcWSyoHLWe0Mng5Gjfm7zB+ctbaH67QrpERZl7byCY3NcWtUDFTA/mClBxWZSiaPBCjiN2KbnBsGFrJwUnkzs7yr8v5o1zGSgcWreCbPOF8RQqlEUrMJ0PCAQ7DA1iiMQmahPr9IV76e5QbDmTpHt+nBX5vQO4rCh8RBhiYkTz4MnI3VZwE080tHH3wAv/8dsquO4Az163IKj6m4FrTqKm/WxlEJZIBUbqiGtuOvK5f8oq96vIZfd2TZ9LhdVoeWnwpsd8b9TSIjCDzfXEUv7o5Dn31p90B2TOxHCQNPt+o8RjYbTCO8SLifhRXvfHz8Wm7+Kz+EeO3JQ68BwzLAAAAAElFTkSuQmCC",
    "title": "FirstUI",
    "desc": "FirstUI UNI-APP版 | FirstUI UNI版"
  },
  {
    "id": 16,
    "url": "https://www.uvui.cn/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC40lEQVQ4jW2TTWhcZRSGn++79869mczMLUls0yYlGGhTrEbaWhddqFgUXFQ3YpciSKkbwY2KUpyCYBfdCRYLxY0oGkHcCBbRomBU1FZrFYIkcWqYTJIh83t/5t7vOy5aS1N8N+dwOO85Z3EexZ2qiqaqLMChd6UYbRAWfbJ/VokbZ4lAye3taqsRASXTZyQs+TzmOGAzmlHCpmRsDBL6tT4Rb6t064Dbtj7yvjydRpxKYmaTLsvWMKcd5nNopl2asaVZbhMvLtDnkspvXXD8khxOIk6lCcfiCKIWNo3RcQ/SmJ9QzHlFrsY9Ov02q0GFbuNBmu5rPdnRqvNKd5OTymPIGkzmQCFAG4P1fLDCA3GX2ajDRcfjs6l96P1HWCi7aCeZqD5fHuV0KcTNU3JrcETQAmBvRoPJEtxwnJk9B/n7vqNcMSmd3yByF37Bu76A2X8QJveh/RIYA2LB5kiegRRRU7uxM4dQfgHadSQIUOUDiFuqIBb08mVEtdB3TYNfQkyO8gPEC1CDEGekiFUalfaJdIG8COw9j9Lag+EKqjBCFnf41vxFXuphto1gpiewY+PEjuZ7D6zNUOIQ+GXcgUV+BrQGlIM4Pmqzwun+ML/rIu62Cjocx5Gc77YHnAmGcApDSKGAmzVgdR4V11F69iFUOIYocAKN1H2eXWnz3to6rcUa5/oRL3gF3GIFem3s8jwyuIybNMmfgVxP7SU78Ch6dDeZskioeTnLuHq9wdHcsDIc8pLrMVi5hv3mU5zan6jJu6lfvEazWlVWdyI+sSlf77iXoHQPxwaWC1rz+M4xPnJdDlvDB4tf8NTSrzhxix+CYd45+6RaYk6ZW6/8xOfiu0VOdC2vj7rUpjzeXLKsjzbY2a1TXe+za7XFW39scI7zKtoKk4hC3SDs/o9lYmY71V0+x/MSa9ESk8kKH661eePLV1XthkXUnUTerIv+L33xRzly8opceO4reXgLrf+jfwEdc1WbTpAuGAAAAABJRU5ErkJggg==",
    "title": "uvui",
    "desc": "uv-ui 是全面兼容vue3+2、nvue、app、h5、小程序等多端的uni-app生态框架"
  },
  {
    "id": 17,
    "url": "https://vue3.tuniaokj.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABv0lEQVQ4jaVSTUhUURg93/W9O/NGwcawUAfCJBchtJAxCIJaCG0CIYgW1apNiyBoFRm8RRtxGa5mFUSYUQQRRJuKKBjw2cIW1SKQFpEk5M9kOPd+p8VLx2TegPjBhfvdy3c45zsH2GPJ5uVUzAAAXgOKWHSvwEBM02go6clgcPImuzWv12CxCmvevrshVQDcAmrBSABg+Dp78vs4GxSl16l6RJx13JisXi08BoBj9372BZFZS7qLNXxJBIPDxJtU6hatkXH2hx06R8t2Wg2RA7xxky7nk7Y8KrC65G29wsC/YiGQP23rnz8dLy01dJFy4o4bRcQJRDKg1tcY+EVadgYH2g9trP96xoiXkq/F3xgEcVocADQWJcL3t8OXHrgC6l2q/wGyl6RoXUE108lo1zK+w28OY7uNOxc2VOHBSFZHpGCmmON+B3f0w7niQuqGsIV9sdnelh+szJcfLt9v2NnEheZAaQ7KR9ZuSaiXvcXFZKyzupOByQQAgFhUjZljGPaI4EwzBtkAsShASZ48f0HvPpJ6No3W//pbMwCAR+e9q9cuQLAy9HTx8L/XbOlZVZphVJr5Fu16EEhDlvX1F3nFvztaE2+rAAAAAElFTkSuQmCC",
    "title": "TuniaoUI",
    "desc": "Tuniao UI Uniapp V3 - TuniaoUI"
  },
  {
    "id": 18,
    "url": "https://blog.csdn.net/weixin_43401380/article/details/130902241",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAB/klEQVQ4jU2SPWtUYRCFz5n3bvbubhISoyJiJxEsEkglghZJZUTUJkhAUoja2WihgohFQPAXaGVhk8rGRkQrURDEFOL3B2idkDXJ7t3Nve8ci7ubZOozZ2aeMyzmptAvSSBpBgkxgkQIkOQOkgCAZLeaJEi1NkBDWgeEzXUkFVZTuIPcaSjVkqPb5bEZTp/H4aPMc//0Hs+X9Psb0hrlILm9kuRw5+XbNjsPuX//yNEx239Inbbfu6IvH5jWISU9fzNlmV26FWbn/d0rf7SI5oosaPosF25gZC9iLH1ZzE0JRLeN8YnwYEl/fsSb8+xkTOvyiK0O9h3ERhMSAZAGgKTy3E6eppmePcHmOhtDgmjG2iDXVtjnAcAAyCNrDYxPSNLXZVZTxYIlZTmSBKSkciUrb0BSwfAe5DnW11DmUE7u6bhN3/opRHTbSALSGgSaARDAEOCuYmu72QAwJGq39OszLXDqhP6tKjrc6VEbTdUaHDugIufODRAt6OVTxcIWrtuZi6imCokGUkwet7sPbfExBqpy72Etc0C7xVMX7OodVCroZGquojHIoRECvvzG71+DnLRdSQPIWhiftJlzODLJ4VF1Mvz9qeXXevsCRcEQ+hN2Ps/UaaPIUWswJJKjm6EoWB8syZLsPV8PgiLTGlhHjIoFSaR10OQRpSPwH79sFlWOAVADAAAAAElFTkSuQmCC",
    "title": "uni-app常用场景速查记录",
    "desc": "uni-app常用场景速查记录_uniapp 文字居中滚动-CSDN博客"
  },
  {
    "id": 19,
    "url": "https://didi.github.io/mand-mobile/#/zh-CN/home",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB10lEQVQ4jaWTPataQRCGn9lzPB4QtNHmgmCnfyGFaews1cYUKS+308bKH+CpbJIilqmsbC1uLC5W/gJRBD8KG6uDIPiRs5sia6I33EDIwLDszLzv7gzvwE8TflsR+AqsgYv1tY0Vb+puMQAkgE/AGTDWtfXr/WxrErdAZQPfACMikYhc7KlFRCulIsdxLkBkiZ4tRl1JPtvE0RbpNzyyNcZiEOAdMAYQERUEgex2O4rFIqPRSEqlEr7vm+FwSK/X43w+X1sDeK+AJ8C9DqZWq1EoFFitVrLf7812uzWHw0GCIGA8HpNKpa7Dcy2Wzc339Gw2041Gw7wans7lciYMQ93tdjUQKaU0sFHAw/V1EeF4PJLP502/35dyuYzjOPi+L+v12nQ6HSqVCiIiWmuAB8VfTCl1d4ZhiOu6iNxL4K6F+Xyum83mHy2IiJlOp3owGGggEhENbFzgBfhoCRyAbDZr6vW6JJNJczqdSCQS8vj4aNLpNK1WC0vuAi8u8AX4YIdgFouFxONx2u22yWQyEkURgJlMJlSrVZbLpQEwxny32HsheZ4Xua6rY7GY9jxPe56nHcf5JSQRuRPSrZSfbSKyC3SryEgpdRGRN6X8X8v0ejX/aZ1/ABlW3liGTMUKAAAAAElFTkSuQmCC",
    "title": "Mand Mobile",
    "desc": "Mand Mobile-面向金融场景的Vue移动端UI组件库"
  },
  {
    "id": 20,
    "url": "https://ionicframework.com/docs/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAClUlEQVQ4jXWTXWiOYRjHf9d93+/7vPM9eTUfaa1MDhQHvslWU4jI5ISl+dhSswMUJ+RjhQNilHyFcIYsZGk04WiFHIm0MYSpMeN9373Pc18OHqshV/1Prrqu61/X/ycAoAKiAIX1Os9FbBAoU2U8oCK8V2gNhbPdJ+TxwBmhv5bpoHQJh/DUOkuCCMIIBXAWwUIUkVc41dXBDm7KTwABNdSQGhXQZJNUSA7/PYPPhZhhKQSgJ4sGCfzgJMYUYMI+Wr58ZQWX+OlAfDqhB02SCsmS6/5Bcm4pdutiKC2KT7z4gBy7i33aDr6XXGooFenhHOxCtsjIzTrLWh5age5eTE050liF3nqKudYGqrB6JiyZqvq8U6g+g77+jE8FkM+wwFlDrXO4nu+EsycijVUq688I55vR4gnxgostcHe3sHAKJC0SRSAGZ5PUOIEyIjSbx2xfDLefiZ5vRvashZ1LQQT2Xoc1J2FiEdqTgYIkJsqjIpQZVcaFIQwvQEqL4GobFE9Ady2HIAFJB/sqYUiAOgv7V4H3CB7UM9bwd2ks1QE9iVWShsljIfK/e4ARwwfn4FsGffUJVs2Ajk6koQly+VgNTdD+Blk5HV5/gt5s7EaE906VVhzrUgmiw3ew93aqVC8R3XMFLjyMr3S8hepFsGyaSvkB0SCBx+LU0yojN+kcm+KBJX5jbTlytAq99QRzvS22Wjkdlk7D119GTt9HC4fgIyAKmS8A6To9bgLq+oM0uxS2LYJJY2IHLz/CkTvw+CUUDqZPUwQ+x/GuE1IvoEIVg0aP4Ib0RzmLz+X/jfLQFEYDTNRHy5ccyzlN5k+YijkE/4cpjMjzL0x/4Vync52y8TfO4wAR4Z1Ca2g5190ojwbO/ALufx43QxZuSQAAAABJRU5ErkJggg==",
    "title": "Open-Source UI",
    "desc": "Open-Source UI Toolkit to Create Your Own Mobile Apps"
  },
  {
    "id": 21,
    "url": "https://varlet.pages.dev/#/zh-CN/index",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC60lEQVQ4jV2Qz2tcZRRAz73fe2/mvcxMY1Niqc5CrC5UFMGCPxYq/sKFgmhSFyLoQtCVW8FFxD9AcKfgpoKLRtyIoijYlmiRUMWFGihYrJBUYttMJpM389733etCKujZHzgcWdq0TzznGY8O+PebF7YePnv/sOY/uID4Xe/7rVXGWWsZaEFIM17Tuc9twRKkcWpJeuzQ4uH7AFhx/ddfQQA6gec05yAGODNXftUDH2rSLSE65q2otPoi/2dF7Oi73ilqX2YfDzkZiXPrr8hplSumxTnHhNBcNfeGJx9b8yOsiIHLtZLhXry3m+S2fI+mmyBMWQXQ2TwUPwpeo6m2KOhinttTAJxEWfknovRsqduQ5zNCNmaXPT4F0PqwwjboRdxA4gS32l/AEZYxEHvodZ8vap7WXawysrzm1Nob8hu46Gwe2gKy82AJjTvJsXDswS+ae0AcYFF4vIwMQ21t0UA25SMAltCsmUOkC1xCfBcxJ6rRyVJ+HFgH6LR+XEzAJXfzP6Yj+QqAVUnaDGA2DxFctnGLru0uzr4tc8G7Lz3vw6LmURl7qpJop/bPvvxArlybmzV9cBybqTMmUCmxSbEow/Du8zww2Es3eBUGk1lqMgm0rZ3EXVhGwCVr5sRxsK4EkG3fx0V0IU7x/phXqxR6zQ7ek5B74z88spqdOXFCHEgAWX192yGpI4pn8WI+Dj9lSV9uRpY08ezlQ0ZRe9QyD+NOOrW8W88fXNsv6xLqWI7l9tHGm5J33m53ZskzTLereuHrG/uGI1NhdHTM6OYJ1AWzoHvJ1DwGSTEE8+yK/jX4/R2T5mcdZOLRvblu2p9V0+QTdYtQbJa0mTArLYH3xBm4ex+8xBjqn/LEJEV9S+d6qmVV6IGuTO/wjCmazL3Yyr281BHpV5lUfZFqTqTqiZSVkucEgMudhY2FO28ZW5M2rI2nU5PWu7/0b/IoPW9FqlG4un9k8l4b4zfW2LfWpjM2te9c9OO/Acqwku7xGh4SAAAAAElFTkSuQmCC",
    "title": "varlet",
    "desc": "面向 Vue3 的 Material 风格移动端组件库"
  }
])
// 图标
const iconList = ref([
  {
    "id": 1,
    "url": "https://www.iconfont.cn/home/index",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADL0lEQVQ4jYWTS2xUdRjFz/e/987czpS2A6OUlzTTDhMb2qCIIoHUWKtREio1FegCjcQuKkLiQt1QuiFoAviChY9G0RAxTYuNVqQNWAKTKu++rLVjG6BDW2butGXKPHrv/34sqEFBw1mfk3MWv0P4bxG8gcyMV9fVc1rGUp/sewOADYD/x/8vCQDI2LzlgLjczUpnkDPWV70DAKisVO4XVgAg89l1G7XWZgZHGBxhx6Evp2cte3rVPwvunVxdrYGZ9Gy/T/9wnwGOSqTDFswRC6kw6ztqf/cCs8B82wvQnfAdOZy1tSeRCDOsMROpYRvJqzY4YtFoP+s127+4txlAXmVN7sQC/XVVd5Ul5z+4JvHcEzb78wjTJkACIEDr6mOt5VfB6VSTcyoenD2SqB9s+GySnGUv+dO+3KPqu1vzXfoCZHRFJTpOiujaRZCPFBPIhuPIcXj6VJYlqzix1COSQ53Ank9Pe4RcqyypWP/RrsqKp3pa21MJaw7lKAHFM+0nea6dEiX5jNAg5jUZ8BZWEdwuxHt+k6v7e81tz5T62v8cNNQXli9bWe5bbO+u2ujQA62UePIVdtsV8I4XIGKMkOOqAe9kMRKhKFLdDdDb6hXWVNR0dMjDwWCBGDHGJ12e2ex/uJCN48fgbnuffO4WSqZDBFUHZ2XB4kso1H9gNO5G/OJ5FD/+GMdNUxgTNyyoFZvePtLVy5xKya8PHrSv/NFvD/01YGfv38OwxhjGABftfY+TMYPPnDrNjQ0Nkpl5Z1Mzo6S0TLGTU+d/HosVTBAVrVmxQnYbMfFmVyddLi9lODWCy8XX5z6Asyc6UDR/IXIWPmTvaPpefPxjSw1amr/7mwEVr1VfwIbni5DrNZG/SIXTSZDyNvsODYhNMIZHTYSGnfj2p2/QeGgz6uqEmEHTyr15c4sjHIkrSwMa3FkERVjQVBuaaoNI0py5QvXlOfWhcM9y48ZbAATq6liZeZiY6u0OuwciJ+ja9UdhTs9DTraAEIJMKcSoIdS2U5bj88Y2fPDVy1dC58ZmljPdRSUDUDNLy1+UgcWr2ZPlgrSZouOTSt/g0angsV/u8uIW0qdwH+U7KS0AAAAASUVORK5CYII=",
    "title": "iconfont",
    "desc": "iconfont"
  },
  {
    "id": 2,
    "url": "https://icones.js.org/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPElEQVQ4jY2TvUpkQRBGT80OiJitij6AmSLIgjBiLgY+wSYmg8nCghjrKxhpKmwgGOymg5FibmAkBi4sIvMAgijoMbCutHfv6BQ0VV0/X3V93Q0DRI0meyhRW6m76s+PQAYiq1vAXG7/RcT2MJ0j16Z6VPgP1R219ek46ojaKeyRtJfU0Xp+u1bciogH9UHdA6aAUbUP7EfEvRoRYePxU/9QT9UVdSLXunqr7gycPfW3TJxsyFnwVdYobqoKfkn9S/2ddrshfqb2yqYtgIh4ytxF4G8T0+k7B2azxjeAGqnjGXwu/BXgI3BXFlQvrgI6AVazw7PazpgJugD8aeKgInEmr3C3YYTv6oX6tfS/+zARoboMHADXwDFwA3SAeWAjIq4aAWogY0AXmAb6wGVE9Mqc+glLkDqx/41aygtU3QQYjj05PAAAAABJRU5ErkJggg==",
    "title": "Icônes",
    "desc": "Icônes"
  },
  {
    "id": 3,
    "url": "https://iconpark.oceanengine.com/home",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACOElEQVQ4jY2Tv49VRRTHP99z571977ErzaKhsSBqiFBYGEO5oaAxhkSzawgFliZWhsrYrPYmFjTEhAKUhAeEgs5/ARoTgzECGrQx8sNld9+9u/fOfC3Wt7Ksm/CtZj458z0z58yBqRYXK56Xl4Pl5djJEB7viNX2amEh8dmpw/gZBvD7tdf55duXdvAfLr48c3f8WgLM4pv96o23FqOfPnXb/tmJdwF6f1w/pqxPaP3eZqR3EE+5c+ngzGjfaQb9s16rL6Te5x8eo0rfEHFU/UTZ2LyBx1X/PldU4n3NDuWV9Q6Vlf69q6c1GnyNNK9Bn9w0kwDeVi8ddZsbdzlHcQcHelJ1UiCvTjqLTC+1hI5rdjTvSbPuzbZQ7ChS7S4X4ZBdWRLUNn5qMDgJQEmGNbdtEUogcDgCQhAgoWmNhhJU2oJbaG5kTIAw7lRVEXiQdrVudy8Bi9WJwFaqgtFgn+tmJds/vYCBAJnVVWJmduS6+dtNfW6z8QUOL/26y0C2ofZ28q0bmLkDw1Lq8+3DR19y5MyDafwzv8w2lIIKDAWyAxts0dFupPbVD25x5MwDxuMKWwCpFDuCYiiRIgT7obaFZbJCiahm6UJbh74QWsrTtClEqFcFlQZu2rvO7UUYSp7MaG6UvLJWU/J3NHqI5OnDtg0ykaqcfyy5+yr/9vgql75f5+MT+4n5v/xk7eYG+RyHln7eu8hnT83z0cJge79McPt8j/uXX/mPPTeR/6u9xvnfYu2lfwApywUJIuLWPgAAAABJRU5ErkJggg==",
    "title": "ByteDance IconPark",
    "desc": "ByteDance IconPark"
  },
  {
    "id": 4,
    "url": "https://iconify.design/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACtklEQVQ4jZ2TT0iTcRjHv+8f91c3t9fN6dBIN/sDTpkMrdUhZWUYdehQFw0CCYmCQCry4rGDJ6NEOsUKvHQrsiZIoVmkMncp25rV2KbvnPs/3/1537dDubTWpef08OH3fXie3/d5COwK07VxqZQWT1AU2V+tkB1TyiQGAMhw+fV4lpvjecGZKxKzvnvXczsaYiexDE/oCaJ422xgLjksJm1HkxE6lQIAEElmseQPwuXxbXnXo49Ekb7rGRtiSwUswxP6Cgr3e9tN5684bEQDo0a5CEQTmHR9EKfdvqcFHlc9Y0MsdXh0VEIVZKN91pbLt84dJ3QqZVkxAKgVMtiajQSbTB/6HGZp5mTnLEkkNN3mWmZgsMdGVMmlyBd5pLZzf4lT2znkizyq5FIM9tgIcy0zQCQ03SRFkf2ONhPTWPOz7Wm3FyNTM0hkuZI4keUwMjWDabcXANBYo4ajzcRQFNlPqhUyu7WpvvQ4HEthNRQBVyiWGFcoYjUUQTiWKjFrUz3UCpmdrpRJ6vS75u5pbcY+XTU0SnmJaZRy3Oizw2RgSkyvUqJSJqmj/5zVZNDCZNDuYRKaQm+7uezHkmkuH2aTGQCAIIgQRPGfLoiiiCIvAADYZAZpLh8mE1luftkfAn757HzjxrfNOHjhdyFBEBGKpfBkzoNFfxAAsOwPIZHl5mmeF5yuFd+p0+0tjFGrQoEXcPPxSzQyahi1KgBAKJbC10gM1v31ONtxEIFoAq4VX5TnBSel6+36Ho9Bl+byXZ3mBsLWbIRBXYmPwU0srYWwxsagUkhx4agFF+2tEACMv1gQF7yBSb5q6+E/V7koCEhlcxABqORS0BRZfpUBYOPt84zuyJnX3nWWXvwSPBDPcHKSIFFBUyjwPPwbMTxb+oQHr95vvfMGJnmBvLPnmEoW/sc5/wDRPkHL4CUEOgAAAABJRU5ErkJggg==",
    "title": "Iconify",
    "desc": "Iconify Design: All popular icon sets, one framework."
  },
  {
    "id": 5,
    "url": "https://igoutu.cn/icons/new",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACUUlEQVQ4jZWTMYyUZRCGn5nv+9m93fMQIURyeKeBXGVBQoElGEgwsTAECLGyM7EwFnTUdBRU1FQ0JEIhiYmJkQQKCjrU5CBXgBFjiJHN3u6//t83r8UeZ9Sz8K2mmZm87zxjy7ePn8270mV1cQjkAIYZO0hI88qqNb5R/qiXcoYrOKtSRPJEwu2vBqiqJHMMoyosCEnh5r6W4EqW2TJtRHK3zW5q02hlwgS4Gbub1xh1Y7ooLDYD9b1nYYHaCLC3skF2M8bdlPffPKb39h6x+dbEtLZc37jFRwdP8vZwmTs/37XvR4+14H0LCwOUheSWbLNOdGL/Mfv08IVtzzUqh4YrnF/9AIBP3jnD2fuf24+jJ+p530TghpkkHLdxmdJFYVJauiiEgnMrpylRmZaWN3q7+fDAccbdxLZysXnqW6EncxrPNJ5oPDOLjl/aF2RPNN4A8HTynGwZbR3Edz7XXLOY8cXDyzz6fR3HuLZ+gy9/+oalZpGq+O8B/0c7DngFQs97XD16iXdfXyMQn619zJmDpxh1Y9LcPRnY9lMVdFHoogJGzxuG/X2UqHTRkT2xMjhAUZnnJnAhmRlBaDEv0HhmkPs0nnFzbj79muyJhdznt9lLvnr+HYvNQFWBkDJAKBimgX376wNNSmuhwM1pY8b1jVvce/HwFUj8MHoyB4nAMLOV2ycqgDu22bU7ojwuk7+jTAiZMCKDnlk/rda2xLBZYInhv55pz66lfzyT5P3ktPWZV7hIsG7mEQo6FRVViipVdTvcokoQmoPnIrRe4OKf+N4/nQLcJ/0AAAAASUVORK5CYII=",
    "title": "Icons8",
    "desc": "最新图标——免费下载PNG、SVG | Icons8"
  },
  {
    "id": 6,
    "url": "https://undraw.co/illustrations",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACoUlEQVQ4jYVTSUwTYRh9M11sp7uCbWmLxbAlxR4QhViI0RAwMcbEBRPjgUTPxkBQYzhIRASXAwe56NWDmnghuIXEFdMEWwq2ZXdJW4RaLIV2mC4z44FQpw3Gd/r+l/e9b8n3E8hDQ2338VQm1q6kzKUgiB0ikZxPp1ejNLM0IxOr775zdg4K9cRm0NjYq0nEYkP6woYDJkMzQRBknjWP0OJLLvRz2KnNGJteT3QksgYOR5+KTf2esFdetUql2vymcpBKrWDc1/1dzqj2vPVfj5MAkEn+evWvZI5L57ylUi3stmtWhqJfAIDIsa/zhH7nwTadtio7Ds+z8E7dwcjoeYz7byK48BwaVTkUlAUAIBbJwSNtLiy0u0gO7EWToYkQVvH4uvBl6jaYZAQ8zyIam8CbkZNYifmymiL9ETLJhC+TMllBhXBh6fQqpucf5rRNEAQ4Po3J2fsCjoRcbigXS0QqnVAcXnaC45JoOd0KOcUDAKxWKz68n4RnbCrHWCJW6MQc2BxyOeoGADTUN+PsuaYsH/gxALfbhzzwJMvSUSGTTEZAkhL09NxCMBgBALg+z+Px0wFIJZqc7AxLR8XrzNI0wBs2b6qqsgMF2/eD5zO40PoIu63VmJlzYZfpDEqKW/6W5jnQdGhWVGI+tMLyyRa1sozYmEsJncaGwMIgPN5e+KefgCQp1FX3Q7atIGsQWhzi1unwJQIA6mo6Ptoq2hwzXx9gJebHanwea/F5wcZFsBQdg1pVBovxKCjKDI+3a2R0rL+eAIDGvVc0wTXfXDjyqQD/gVxmgMnY/C2+nrT7/QMbpzzs6ouZVbZSo/6wT/C/tgABjbrSu5kMbKGurWk/laADnfFEoJxhFmUZliaUihJGQVmmVPLiG073vWdC/R/zGAwLYQIaZgAAAABJRU5ErkJggg==",
    "title": "unDraw",
    "desc": "Illustrations | unDraw"
  },
  {
    "id": 7,
    "url": "https://icons8.com/preloaders/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACcklEQVQ4jX2TT0hUURjFz73vz8zo6DilGeGkqBWtDAwiMggR0sCFMykl5CIETVoFkTsfLWpdkDooBJEW42RRrVy4Mto4FS0i1KciEwrKjM04f968efdro/jEyd/mbu45597z3ctgozNE0nI8wiPrjda16lW1IsceM442Ivy28rlH0wNnlwFiAKM9DcN/CAQXnzrd5YPGTgxqsRe5VHxuBfHmSN9F075PPiAaXbgtSY5zlhBvGRPNlpk1ASIzFWcAu+IzPKcjgG7XcGjEASAwsnTfUXxsUnV7hzisaUbYlhSnAkBRikoVgNbSRnqjMUhKY5AUmwEIABhnrQSibGIzxST1vCXYayMZC3PZuZM3jR/CtHpmHjakTmG1roaWa/Y7CJGELmZ1vFjwq66ikKQ4JDOd+BZNqU1fH/gy3RPb3skPMwlMdVmFumIA0PZ80eE9Xn4yG/tTJbtK6gn801SvL3agcU3j0DRxyMA/Fq3iwggrDveFnJEKveur7bGZk20tCOci0+MoLrtkZhPM4Sq5ExhZub6buDfiguJAUB8OjOr9MiDNm5mk6SyrVI2/WzEuhA4Qg8YOHdcO5fMv85DiDAD8w3qL6ipqymVyr6YHqpePEh5JYFS/cWs8+sQ/Fq3avQbvDJEEogIvlhhAjAEahzYEf6V+WZblOafnBNKx9c/h/rr2QiE3g/obRiid2qhth8YEB4YIGhN5RU6TsEwiAQBZAGgJ6p6u8bW7gWe/zuwHg+zlyHtz/thb871jZKnVSG42WEmaAAAPMOiu8A0m8/oXgK4CjML9dd04aLDP+3v1swBmbWk/M4mtHQE2b//Cdv4B7CMQ2o8q5psAAAAASUVORK5CYII=",
    "title": "Preloaders.net - Loading GIF, SVG & APNG (AJAX loaders) generator",
    "desc": "Preloaders.net - Loading GIF, SVG & APNG (AJAX loaders) generator"
  },
  {
    "id": 8,
    "url": "https://home.streamlinehq.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB+0lEQVQ4jYWTzWtTURDFf/NemrapsURsyIcaaiKKVFy4EL8LreKqiqEIFv+AqqDgVlwJ7gKCuHKpuBQ3blIpdKUttKuIIqYLo1DBFoJW0yQzLnLTvrZBBy7vPc6cuTPvnBE2QgAD0sAEMALsd1gZeAM8B74GcrfFTaDiQBPBPF/M81rfwBeXsyk89yy0icCaCA2g6U4DWAvghS1cJh1QAxrioYDuTvfo7cIRPXclqYC6QjWXO9kmp4Cl9k0iGNBMZHr1WWnEFmzcZvSy7jnQ1wSMjc6WgFQIuA7EgQaCb4YlMhEpvD4hmcNRW63X+Vb+JavVBoBheK5A3HEpBtrTaKxLn84N25zl7eGr43byYsL6B8Lq2g6OokDRB+4Du0Ra86SzfXLjwZAYxr6DUbojPmcuJCWW7Lb3syu4QtKWUoBPQDagq1y9k+XYqQGxMJweSxECFOPaUFEXSz8RATMEKPvAmDOMtWUpvV2Rd9Pf7Uflj/Ts9Mkd6qe0sMzLJ4tW+60S6GI+BEwBo0FnxeJhezx9VjK5HUYXfP5YlXv5Wasu192g6wWmNsvYksjSuUhzRi/pvI3biw/nLTkYUYeb+4HrMnY0EqDD+ZTefXRU43t7FVBnro5G6mjlwE1NZ+t/WnnbMnlea5GcM9unAtwKEmTLe3CdR4HB/63zX2td4VAO4mvuAAAAAElFTkSuQmCC",
    "title": "Icons",
    "desc": "Streamline Icons: The Only Icon System"
  },
  {
    "id": 9,
    "url": "https://iconstore.co/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5UlEQVQ4jaVSu24UQRCs7hnv3p3PnGWJHyCCPyBGgEMiSw4RInJCYOSViS5B9lnOSNCB+AH/wAkE4k9IHCHZARze23kVwe7eyyKikmmppqtL1S1YA/f2jFxcxJ8HB/3BYFAAqLKrq5GMx77llv/LSvNwqDIcpt9HRw8yaz9lWfYQAGZV9b3y/sX2+fmPdREBADavAPxVFM+61n6wxtwtnZsBQDfPOzHGy6lzz7fPzr62g245KIvijbX2LUmElEI3yywA3DgXcmNsAnwI4bA3Gr2bOyAgKIo7per7bp7vz6oqkoRRNSGlzxARK/IkxhhFVTsbG3Lj3Mfe9fUrjMelCsAZ8Lrb7++XVeVIpk6WmUR+2Tw93d08OXmaUvrWyXNDMpTeu97W1svZzs6hALQAANV7CCGCFAAiJJt6kTZJiAhIIIQIkfsAUAuQAaRChCBN6T1U9fGf4+MJSKOqj0rvCcBAJILURIa5QCR1HqiIEEBMCb0s221CBERkyZLYprAAYFS5OIZajQBK59pVqZBgPQAAEBs92/QsxBsHDcxcd+1i2wbFf6IVYGsf5PqwBWqOS/WKg3pN9apui7RrrN3P+TpMEbPU2H5cxTKvKm0+CgApxkkIYaoi7S38ywFVRL3300hOAOAvZqgI/p3S4p0AAAAASUVORK5CYII=",
    "title": "Iconstore",
    "desc": "Free icons by first-class designers | Iconstore"
  },
  {
    "id": 10,
    "url": "https://www.flaticon.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC2klEQVQ4jW2TTWhcZRSG3/d83/2ZuTMRM5mBIIJ0ozWKoAliESELt4JgZ+PChYtioJBFEXQ1WaRWqxZC6VaxVMXoQii4qKCIlpoGUx2NC7XdqkkcZubOzP39jouUVtOe9XseOA/nZWN7Y8mInEKWRwAAVeLAqHMO1UgKlz3XO/zkxZnulRO2Xl/Nx4NlNrtXYgKRlmVJUlTVgXRQJUkAWiAMA3Xu653ujWcxOzvVmg42YcwhzbKRAMih6khSAWVUNRJFHms1iyiyiKIQgU+nOIl2u2xO+6+wWjnkkqQAUFi1cobGruh44mjspIzHrxoj/ZJOqOKEpHPFYO+xp7/E5lczELPkhrGTasW6snjX7iajtaZfewnGPIBKWEFZ8O8Hn7hw0AMAzETRkvjefa4onObF9d1stEYAaP66eZy+v6ZxrBDpw3qnVTShXwmK4eBaby+5NDN7T0vUbWmWNVivGU3T4zuHF84KFNxx19/TJPmDvqdUnRLfWzXWf0esnKS1BRYXC5T5MjyvBSPUZPL7zp833oeCgvZRwVw7Vujb9H3RsizdYDhR51T7gw//eXjh0nR3436heVnjuGRYkYI8jcV2jPZREayvl1Dl7sR8oGm6zTCwEAaa58Nc5A0oKIavwzPT8Dy6LP2l1yvOQ5VYXy9lX88KMT8/Lp2+Bc8nVEEg1yQbgoCQU3Cq9Kwo+CaOHJkAKwSAfQA7DgrusfYR0vRHeB4Y+A0b2NcA6HgyXgUAzYtre+MfPoaCYMfdBgAAOsTcXJaTp+h74gZDJ2JerP90+aH48We2nZYXVHAO88dyoHPr3W8D2HFQZe+v+FNN86sMfMKYWmi8EwCQ9vvLu+Ho/K3sXafTEQBodL9/vvXblja3vs1b21dH925efvTuC/87AUDnpovPvvhcC/cNK6FFJazaenBsv5afmIOAO6q7Lwja+HljwXjmIlRdXuQv9B556rubef1v/F9p52AACSvEBQAAAABJRU5ErkJggg==",
    "title": "Icons",
    "desc": "Vector Icons and Stickers - PNG, SVG, EPS, PSD and CSS"
  },
  {
    "id": 11,
    "url": "https://fontawesome.com/icons",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlUlEQVQ4ja2Q4Q2CMBCFv0MHAcIgStxDHKETOEJHUBYRByHaReT4YdoQSQylvF/vrve+vBS2Um37prZ9E5sTH1ay23cxXB6mui8FZAADu7CY+sUNAI72pRE515myCA2iJThvVwFUpU0BuKcpwidHAwRtp3M0QJFzEgDIT/Z9SAHwQa9JACD3Zv/70plSZud/tLbBdhoBAbYhipms5ukAAAAASUVORK5CYII=",
    "title": "Awesome",
    "desc": "Find Icons with the Perfect Look & Feel | Font Awesome"
  },
  {
    "id": 12,
    "url": "https://www.iconshock.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAB0ElEQVQ4jW2RPUiVcRTGf+e8r12h3ikQxCkI7w3tg8qas6WGqKEiwnJoiK42RrgVRRHt1dYSCBEREUHQJ7R5wU0SjKJClwZLpdT3f56Gt6C8PcPhDD+e5+Ec27HzgKJEpSJJJZGkhEJK6zYPktUsr5F3WkfN8k6ymqMASQJRTQCdGh7q3dSNEkqoJJVKq6QVr/xQSAEIgRqN+sWxC9Mzn4ikKEmlYpW0orScV+kQIBRIRbHhyvXL0+8/E6XMLbnMrTQJFK4oUVIVQoCaI2cbjfrC4hJREr+bKK2QlimXcykhQVTLwMCuodMngdbklFJpGKASyyQl82Rb+/YiiarM+mfPnxRFwb9aWPxxYvTG3NdvmP9JkEBXr11qp4Gbt8dnZ+fwDPOcCBDo8JFDg/v3tdOv3rYeP32NZxYZ5tZf3y7o6el+8Oj+/8osHTw2srD0s7LH3Prq24C/XgbQPN9sjp4DzjTHJian8AzLMDfzfA1aaWDPbuDe+MOJ1iRkROAJc+F5Ow0URfFueubWnbtKqxDmjhwM87ydBhpbGkePD3+fn8fcLCSXOWaGZV0bu9rpDx+/vHzxproeCAIJBYT19fav9Tcz7xCGOWbgMsMMc+AX+EURJWMyYF0AAAAASUVORK5CYII=",
    "title": "Iconshock",
    "desc": "Iconshock - 2 million stock icons and 800 icon sets"
  },
  {
    "id": 13,
    "url": "https://codemyui.com/page/2/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABt0lEQVQ4jTWQO5ITQRAF36uqHg3aj2TDcbkaByEC3I3Q7gqNprurHobASyfTSH7/8ROCuVGKiIiABBIEBEkkJUmCRLOAUBIlAQJI5pyzd1sWdwcgycweICnMaPrXePT6zM+P92iH1/PJzC6Xi7uv69paIxmH5SCoqiqTgKQIPxyfUP/93scY1+s1IpZlCUBuFu5oTVWSDDweVrm7GyAAJEnMOccYBiCrZmZVCZiZMFoLIwVIXNc1IkooCUAIfG4GaEsQWJvfZgUZBhqncD6deHpV5ej9Y9tjDXtZ/M+sr6sbsTgJ/P7s356XML733EYBOrZGHn9dewzpnnJym2XENgHpPvW2zYKemt+zFuN91m1OqkIzL1k0EyCBkCQj3/YkdZuapW2kQAJmjPHxThrNYORyKG8EQTQjyCnQGOYAVSUgGAZBSu3JwuaRKRJLlRsYhIuEu5sZgVBPkCRAI0Hy8R5A3xLksFsf+0NorQXNJKGkkkKZBalKIiwIsKrWdT0en/p+v+97xPmMKlW5BOBQzGRW5UhLwGDkfd8ljdHnzAAgkhE0g/RFkgp0MlSqwlIvY+yZBSzu9Rep6EowUdpjCAAAAABJRU5ErkJggg==",
    "title": "CodeMyUI",
    "desc": "CodeMyUI – Page 2"
  },
  {
    "id": 14,
    "url": "https://icons8.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACVElEQVQ4jXWTP4iUVxTFf/e+9zmzM+uaaAgxmtkEEysLwUJLDQkkkELEBLFKJ1iEFHbWdhaprK1sAsYiQkAQBRsLO//ARrbQYEIQMevszLd+791jMeuGxPVUr7jvXs65v2ujK4eP2xY/p057QA5gmLGJhDR7WbXGl8vLejYD53FblGokTyTc/v0AVZVkjmFUhQUhKdzc9yY4nzHbpTYiudtqN7VptDJhAtyMbc1WVroxXRTmm4H63rOwQG0E2EfZILsZ427K5x8c1KEd+202NTGtLReXf+Ho7i/4eLiLq09u2r2V3zXnfQsLA5SF5JZstU505P2DdurTExuea1T2DEd8t/g1AN9/cozjt36wBy8equd9E4EbZpJw3MZlSheFSWnpohAKvh19RYnKtLRs723jmw8PM+4mtp6LzVJfDz2Z03im8UTjmbXo+Kt9SvZE4w0AjyZ/ki2j9YX45uuaaS3W+PHOOe4+X8IxLixd4vIf11ho5qmKtzd4U5ti8fYGr8t73uOnA2fZ985nBOL03pMc2/0lK92YNHNPBjb8VAVdFLqogNHzhmH/PUpUuujInhgNdlJUZrkJXEhmRhCaz3M0nhnkPo1n3JyfH/1G9sRc7vNs7R9+fXKD+WagqkBIGSAUDNPArv99W5PSWihwc9p4ycXly9x6euc1SNx/8XAGEoFhZqMrRyqAO7batZuiPC6T/6JMCJkwIoMeWz8t1rbEsJljgeEbx/TuloX/HZPk/eS09bFX6hlCS2YeoaBTUVGlqFJVN8ItqgShGXguQksFzrwCX2pBllP84hoAAAAASUVORK5CYII=",
    "title": "icons8",
    "desc": "Free Icons, Clipart Illustrations, Photos, and Music"
  },
  {
    "id": 15,
    "url": "https://cssicon.space",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABkklEQVQ4jZ1TPWsbQRB9s7viVBoJS0JgELhyJ/ZKx2DcBAJp3Kh1I9w5Rf5FXKaxIL/AnY17Q2yXkq5zILiKipMrdeLOsztp9sLZ0hHkB8su8/Hm7e4MsAq9xlbpo3VR/X5/Syl1AGA3mJ6893dJkiz+SxDH8Rci+qqU2jHGAACYGd77P977b0Q0Go/HL0W8KRNZa0fGmKFzDs65W+fcg4gQEe0T0WEURd/zPGcAFwAUAG+KQxzHZ1rroXNuzsynSZJclZVZawdZln3MsuwymPy/yr1eb6vZbD4qpbaZ+Xg6nV4HnwYgAFzVqyoAaDQaB1rrDjPfheQikUvJqohfIQCwa4wRAPdVPxMk+yqCd6MgeGJmAvAhSK+KXSmoASCKoud6vX6itd5rt9tJmqa/wlVM2KW0VgjUYrFYdrvdF6XUJyI6arVavwOJL5KstYNOpzNI0/RnmYjKu7V2VKvVhs45iMgtgAcRIRHZ11ofGmOQ5/nnyWRyU/TPRq0sIufz+fzHbDZbvlXwCpsM0zpsNM5/Aaz+sG+6W85UAAAAAElFTkSuQmCC",
    "title": "ICON",
    "desc": "CSS ICON -- project by Wenting Zhang"
  },
  {
    "id": 16,
    "url": "https://feathericons.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACLElEQVQ4jY1Tz2sTURD+5u3bbJFQWwuViBdPhV6C5FJKIYdqEUWQyJJ99FjISQT/hf4B4tWcBI1vYSFK/IGIl6Ctt16EngtCailpGhRt8nbfeDAbtmJr5zjzvm++mfkecHLQWWonPSIADABKqTsAyqN8W2v98n9dBABbqVQKExMTTSHEdBzHbQCQUpattQdHR0d3m83mLgCSp4A3mfnT1tbW2vb29hAA5ufnc8Vi8bnneS8ALALgrAICwCPwZ2Z+r7WuZcdJQym1w8z3wzBsiSx4dXX1chZcq9VcABwEwaLv+6WRQgB4R0RlZBJcKpXcJEleA/igta75vp+r1+tGKXWDiN46jnPubyVZAszNzeWFEIVOp3PP930niqKhUuo6ET0DUAnD8OOIgIhohZn/LDYlyOVyPBwOf01OTp6PomivWq2uEFHTWrvW7/c3lFIXu93uj5mZmcfMvBuG4SsANFZweHgIZs61Wq29IAiWpZRvABgiWp+amtoB0J6dne0CWGBmPx1nTOC6rgvgexAEVSJ6SkQ3jTGXiGjB87wrAL4w89c4jpfCMOykix9fYX9/vwfgghDiCTM/GAwGbWOMZ4wxg8HgERFdTZKkHEXRt1FjTndAALhQKFwTQkwzc4+I1qWUD6WUieM4IkmSA2NMOYqiTmq2VLkEwEqpJQAawO1er7eRz+c913VjALDWQmvdy/hlDB5fwVr7k4huNRqNzX/8jWNOPaV+3Bdnjd9E2vQ4gK26LQAAAABJRU5ErkJggg==",
    "title": "Feather",
    "desc": "Feather – Simply beautiful open source icons"
  },
  {
    "id": 17,
    "url": "https://iconoir.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADDUlEQVQ4jXWTT2hcVRTGv3Pvfe/N5GUm0zZTWhQ11nZRYivaRRAEE7uIqAXRCaKgNIvSInQpil3cVI11Yd1JUGrEpAWn7cKCiqU6bozBGmuVhGL/kBqLqWkmYcaZefPevfe4SBMMxrM+f37nnO8D1ghmEADEc0P7m5Xh+crcR2dmxo6m18ql/2tQvqIzqdZNk6zkKwhaD9Sj5DvVkr3HCSmrfzcOdmzsmwWDxOpCLUolrYjANoZrWKbS+PnPINSF9vzGV+vN+GY1stmEfA0AxZNFoVbhkHYAXPnqkTbVmtveNJI7792ZTYDMfC3C2C9Th3Y92HXEucQu16wiiG68vzte+HCvSufOOfK+YOllmwvXawnLdD0yl6amp41hflwE/mkAKBQKTjBrAQC16ff6yRNDVnqDyveu/1Wz3U7IwK5rDyFS64RUXz/zZKGThXQ3fvx+bImYeIVAZcI+Z+3I4s3KY03yurZ17PtZBKlPN2zu6LcOb9tm/K7wgqeZ1A/d3dro24PFwIC+/Q5adNJ/afPWg1MO8uLsrdHXY6fK8MK95WYcLRrlCal6G4k5/u+1Vwiipqu25Nd3lMsjb0WOfBG0vCk80RkxLvt+epiC9LkYtANB+ITWjyq9dHAQsxZE2lVufTwSG+T8TBg1DdlaQj028A5syew5DQDFyaK/5Y72+9lvPW5YnOgKdx3WrMUKQcNAxs6NZ8NCId/27HOkvENSpI5eq397/tfKN4N35vN3PZTrmYgS77An23oAQJN2ou/kJAGAgXAG3npmJuaSuju354OZq3MPWGveUamW1/xAPs/MgqG21xM7tyQ8JlFAAQBgWBhHEgAwgd+IuSgf2fHCwtbM7lPVWtLvDA8TkWPp9TaM/RwABgDCsg5+L596+c/qmYm1vLEcX81fePhs5dLM6Pzl7H/MdHH2kzCbypWcDP6oRzQY+26xQb4EfAABEnh5i/CYIRrtzdz3htZaaK3dihd2bnqxNn7txFMb8ukhK9zZOJIeE8iQg3GGkUpHTqB47MufBpmZiMgBwD9Cgmuh6fS/rgAAAABJRU5ErkJggg==",
    "title": "Iconoir",
    "desc": "Iconoir | Free Icons"
  },
  {
    "id": 18,
    "url": "https://heroicons.com/outline",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACs0lEQVQ4jX2TzWtdZRDGfzPvuffk3N7EEASXjWBRzELFnWLpQl2KIEeTtkiVuhFdmaalJHDod9JmI4qgFESbtunxIysFiVLwD9CNCkIUFEGsVmnvx7nnnPcdF9eLUaqznI9nnplnRgAyTL9KkZlrV4Wre0KGBIDV/eWqmdXza/FhADC5kqI5MJNjGRKEW9ipfYN7I/HHdjSTpwB6ZXG5qAaLS+uTW//OFYAzs72HVHTClGkntlu1MZc0HDf6vfMCNtFqHewUJSH4DRH5qA7yoznrHr2QfC7L+4u7xcIXrWaSiEJdQ+3rTzBWXllrfApwbq5+UiJeFOGxscgRgO6gXyB6f2Tmd8dRnPSr4rx5+5iQfLmw3tgazQwwf0k2gI3j6R93hmbzQY88HkfxC2VZPqIOdjp1FpCzC5da7y+syxZAlpmCGIilqTmApXzy+/m11ntlWa06UROxu9RMp0IA3y8lTc1lmA4BhkoA5Ln4kVojMB/ARG5Tk3BdBZqRG89z8RnYrZQZAmB5Lj5puLZTEPhNFf1aFAlOZwBS0P8CGMWCcJ8oEoxv1Er/2aCqCsOeBZj5HwajmAVLB1XVrzt+E4DlfZ233zhodurp3sPDTsM5/9l96Ds2233gtee8reztXoER3dqWq7rux7G8laXWzhE/WhZAtseiHPELT1wb39HQd4NZGbRx8q9LzBSycGbu5stT7farN4rBZlF0Dizmt/+0ncHJuc4dceQuTIyNPfrrze6ho5fb58BEAAwTQWxlb39xsj12vFv4H6q6nJ+ukg82v0N33VM847Rxop24ndc7xdKRi8mJ4ZGJbXumoeP0bPf5uNk8mzSjqU6v/y2CjCfJrl7pfy7r4vCRi+13RrmMnulvnU0zJJye/X3aueQlJBxQ0SoEe7PXq1/PPhz/ZXsxwJ9WR0F/KAphiwAAAABJRU5ErkJggg==",
    "title": "Heroicons",
    "desc": "Heroicons"
  },
  {
    "id": 19,
    "url": "https://remixicon.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB8klEQVQ4jZWSO2tUURSFv33uYx6il2BEE8HGWgQjqOkkjQh2IhLwPxgQRBEdBDGIYhdiY6FgEUEbBcHGB8RKGEGinYlPDDrGmTuZxz0Pi7lzZwYciQs258A+e521Flv4DzhKisk3owAs7v0hlKwPwIKL8vlmNGwwDPNx9YhUzMGl42L9swi4Q+9mecV9AVBz7nQ4os94BWf6vgMBEM8oNdc4d3K+VQyeIuxLX7xOfO+oD2BrREni7Qy2GbycS/uScfnWjgBol+sQZ9Co9MTEQuOrh6wrQiuEhqxymsktswtKGe+qdmFZu7DsrH9t8+Ld1YwADbouxF8Uri4EFgKT1YGobi7umbn5Imrqqaipp47dmH7Q03nBXUIoZaHlHaM7LLn8QJbGIWUlvLSAgu+7xtR1P1PQs0y7JvzUiu1jjkLB4Tq+PXATwEQa0UOAQYK+/Fo1YVXD+DgUC73knJPu0w/PDovuZZD0sujemzXh20dFEguhEQIjhBYCy+8A+4SOlb7Bv1SjBp9WFK04HTaYwHC7vcl/viECNKxXYXlZaMbyK4ArxUBdXjoh7cEM/gUH9Sq8fS8VJfI4mZe1bqujoJ36HlapEtNkd9LgFqfc/mxLAbCs4fi8AS0AW4HzTLsZ7slKl+AOhkd4g5s+FApFjgrAH1x93+UVOjenAAAAAElFTkSuQmCC",
    "title": "Remix",
    "desc": "Remix Icon - Open source icon library"
  },
  {
    "id": 20,
    "url": "https://iconhub.io",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACpElEQVQ4jXWTS2jcVRTGf9+Z/8xkZpIZGkwa6wPBLtSdCnVTqS/wQQIWfCASRVvwtVXwgQupKLhQcNOllOJKFLoS3AhFcSHqyoWLirWmNa1R02Qyk8z8z+fiPw3deOFy4R6+e873uAK4Z+7idLe7/balp53ltQgBaHLaGAArJf2JObndr7/71epCXw/vX+sWbHxa08ximX2MfTX4yrryiJBq0WGUm6f+XR8s127Z88qxImaeG2d/jI2CkFCEbJBtIsIRCJBNJqOyHtO3NeqZASxnDhI7qtFlwJuXS20Pqnl2tlMb63YmVkjYkR6mQs+G0HxSasJbmanRTureR9scOzHHg092WLix4KGn2qo3qjpC6bGA68KyoAJLeDwyz7+xh7eOz3PgvhbrfyeHltq89tEcs/M1Rjs4AtlVy2KiLxF4azN14P4Wj7/Y44fTAz5+fY1L50tm927z4+kBF1dGNJpSJpYQphJMqlTP0tx5aIpM89nxdX77ZUS9ATtD88TLPRaf6TLcMhHexcTEosoqYGvDRIi7HmhRb8KlCyW3H2xx8JEOjSlRjl1xnWCKib+ycaMhffPlFoePdjl8pMd0L1j5dcxjL3RZWx3z9Rd9mi2RV2G0uP9s4io0EfKgX+ruxTYvvTPLNQsFAKvnRnz46ho/fTtkql2z01XIhLV089nS7KZOEgy3kn03Fdx6R5PxGH7+fshfF0qmOoFzl21FAVgNanvTaeSwoTVdY/WPUufO9AFotkRruuYsjQROZagmU66EzYmIViCMK3ucVqMZnukFM72gqIeztCY1IxwxFWl9Ev9cHrw3ys1TRXQKKcLG1bYyIROwBdW9VIsiOsXYG5+P+vUPBLC073yb1vhN0LKd1//fd5axVPyelCfXzuj977hh8B+MClxxKn94egAAAABJRU5ErkJggg==",
    "title": "Iconhub",
    "desc": "Iconhub"
  },
  {
    "id": 21,
    "url": "https://illlustrations.co/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACmUlEQVQ4jT2TS2hcZRiGn/c/Z+ZMZiZpaiGJFlQQslKxUhQRXFUEN4J4pagrl9oW19JFoV0quHPVC1660YJEpCBKoFrBSwVRRCyCaIlRizRnMpk5//e6OJl+qx9+3o/vvcnf3bc4nu57M0nPhdWxLcnYAhDtWDJGCFm4sTg/mdZHy/HOvjd6w/KlcZ0zMpLAIJmIFp+SwWr/MDZFr1+8gPvS9leHdoBiFymApjHDWwqdeOs6keH40b1s/ZtdlrODZGwDLg2FhGbnhk2nRNf/zn77gxvKAa8cXvCgksJ2SoXtEBLGSsIGJOGU5Nygaph4Z63W8qDDSpizH91QNRTTBtkhQG5FUhItZ4xytqqufG2j4ctvGp55qOKpOwsufzrij83MXBdH0AoBElIKaHfINNl055POrtUcvGPIIE2Ym0sczOb02had+aQI263WBjvd9Cmg24HNjSmXvi84/GDJJ1e2uXgteH615IuLNRubQadENtjIRonZAkPVL7T+9YiF/pClPQ2nHu1w8pGK/YsFg78y61d2qPpp14B20uwpwbgOH3p4wHj6H+tXB9y92uXAcsHHP09pVrs89kCPcR2WWhNa4cFtcKDJZs+w4NWnS1478xuXryYu/VDz+o9Tjry8yEJfTDNKSb5JoUWDUnKRkiObC581vu2uA7y3scT5wQr7bxUfrm05DEWS3QbOCJez8DqsiCAVot62OkXhjqWwKB2ux1ZKAuw0KwcmAbkl0caKSH728a6nv36rJz7/k3sv/M5Pv4RefHLeZBshz6JsR5L9bm9QFK20MmH1KnH7yqLvX+pzz96K5UHyXE8Q1qwHLYb3U6/659h41JxJBc2uH0SYSZMZNcEoB02YHG7rYlAiT+p8bhKjI/8DlHFvYb0n0W8AAAAASUVORK5CYII=",
    "title": "teilllustrationsst",
    "desc": "illlustrations - open source illustrations kit"
  },
  {
    "id": 22,
    "url": "https://blush.design/collections",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADBklEQVQ4jX2TTWhcVRzFz7n3vnmTZJJJk5lUm9jEWtqhpYqIHwQRkQjSRU2kqJQiiLhQwZVuXJiikI3uXLjtulSTRUtdiIKmERUXaW3rRyohjYl9mUSTzsvMvI97XCSCC/EPZ/c/h7P4HQLAB/MLA2Gx8K6kcXg/ANLhv07KYExEcqbdSt57+4GDET+eXxhIQjcddpZG23EDBKSdd/7bS1LyHiBZLJXQjBtzYTubMO3ATe6aUxMEPpcIiSAFQABEUj7PSWtJ5/z21lba0dU92g7cpCE0nqWJl2Q3lxYZWisYK3nP3Rb0eU4XFtWKG9peXWEYhjZpNT2JcQOgYiV+9Pqr/Hpqks/u38usGdNLkPfI8xy0Fo2NOt8/8Qxbn1/g2GCV23fukGTFoLMjWP1jlb2Nv7B865ZOPPYwln68gu49fTDWwjmHzp4yVm5cx33lbpw/d06nn3wCcTOmL4aB6V9eQ7UNnP3qMk+98jIXNjZx16EaVn/+CY16HfH6OpZvXMPQkaO4+P0PGKkdZtRd5sFiD/qWIjA9/aHPLBkdukcXjvUzOVrD/PQnOPvWm7CVPgBEXl/HC2emMPbaG4jnvsPxq5FGFiOyncm5NKVLgf3fXOPz0d24WKvBVit4sfYojrsBkMBnfbcRDA0CG1s4NbuI6sIKFRZAgg7GykNUuQuVxdsYnr2K6OkxDB9+CPcu/wlCCAd7sTjUhwNfXkF1YQVZVweMBIJygHaI8ZSMRX99i2i1sVwOcbOyDwBQSHMgSdC/tgkZKwOCEAHBAUgpBLIAJcalDsgQQZYjyPNdhIFmSMSlDlCeIkQPgUoNhDqskWm2mHZ36pf7RxR4SYbwxsAbsxvo9euxYbXLJZlmi7BGEOvGCzOgM/GenvTSyVFFe3tpk5QwRtwVjJFNM65Vy7x0clSN/p4UdMYLM9TEmYEvnnt8+vdHjoyuBULQSiRDSOA/a9IO06KEtFhgJSOGvr0+99SnsxMEgAe1tu+l35J3XJKNe/3/nA1NlBXczPkDhanLrK78DYAydgo4fFMjAAAAAElFTkSuQmCC",
    "title": "Blush",
    "desc": "All Collections on Blush"
  },
  {
    "id": 23,
    "url": "https://iconduck.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC7ElEQVQ4jV1Sz2ucVRQ999735puZEL6ZZpQutAiOCkNKaxTcCTU0YkUFKerGv6AQSjZ1JWhXxZ26mFUgIIWCZiNqXWWVTcFFKMZYahdj0mLA+cwMTr4f793bxUwUeuAsDvdc7rlwgCkITyBN04utVqtst9uWpunKk/OTHZrRGo3GM/V6/YaqChGVAF4johdn5t/N7I6ZJcxcFEVxbTKZPAJABIDTNH2OiL5g5vdVFUTTQGZmdCKmGkQEM9tU1Wuj0eiBzK5/SUQfqmrOzGBmNTMAYAAgImXmCEBVtWTmswCeKori2xODM7MoIhJCcFmWCTMzEWFGzrJMQghORMTMIjPTfxdU1ZxzPBwOqdvtWr/fp/F4jLIsUVUVxuMx+v0+dbtdGw6H5JxjVTUAEABoNpuXQwhnFxcXdW1tTZaWlrCwsIC9vT1477G6uorl5WV0u10aDAZ6eHgoIvJrnuffAQB3Op2bzKzr6+vV1taW9Xo9q8rS3rhwwVZWLlqMwXq9nm1vb9vGxkYlItrpdG4CmP7RbrdvqeoH3ruqWW/4KgQcB0WR5yAiJPU6ml7ghDE5zqsqBE9Et7Is+4hardbXAD4movlJUVlRVuycw413z+GF022oKv44PMIn3++gKgOSxGsz8WRmIwDfOCK6QgCKEO3VMx1+/ul5nGk1sXbp/P99U0OWR+wfTXDvrxHvHGSWOEkNuOLMLBARFUHl8vln7erb5whlQDwuMa3CtG7X33sZ8IKvbt+1O4O/KXESzcykXq9/DiKuO4k/7j7kPK/s9ZdOIwYlJsCmAaDC9unmL/js9l2aT7waIETErKpvmdmBMEsZY9zP/iXfqFEyl8A1E/hmgtpcAt+o0cOjCRUhRmFiMxvEGC9JURT3vff3ifkVJpwyM7REcO/RP7S7n+G3gwx7Bxl2B0Pb3PnTjvKKiOhBjPHqeDz+gQB4ANXc3NybtZr/qQhqISrJrKonUFNzzFZzHGPUd0aj0c8A/GN1on+BMONCPQAAAABJRU5ErkJggg==",
    "title": "Iconduck",
    "desc": "Free open source icons, illustrations, emojis and graphics - Iconduck"
  },
  {
    "id": 24,
    "url": "https://iconic.app",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACU0lEQVQ4jVWTv4+VRRSGn/fMzHd/ALshu0hYMLGlocHKKFmTVRobSwtjoglQW2FHYQAbWsBE/gZaXRLXaIyFNhaUdFyiKybiLrt7v/vNa/HdvS5TTGZO5pzzvk/mCAAskAG+3HjxdpP4LFHfTW7XMjBSeVqIrQIPPvp26cejOWK+rlycjM+tLn+VmV1tIhd3exRcM9CgGMWI5K4dKN/7a/vx9au/vfkSQOD4+MIfozfOjB4ezyc2DqbPuyJqMZFkFYuCnVAtECvNSmpnu5v/Ptv98Mnvp/cCVM+tHbs1KEsbO9PtfUkACYH6DRQolCTxz3R7f5yPv7d8ZnT7Bqr6/P3nbw1UflA9IEsqmAzKQDFkTKNwYBVMIZzBYzWuXXspRFyRIhsbLOOeJmAACWMFMvRnuzqUSo64Foj1WT0wInqqC64Oyf8X6wvLWCjaum+k9Vxrt5Zk926Ne7Jgax7Eh0EbzyF17gjXtWAhWHPN9E6kxfXwUZ8rZLnvIiJUJhAyGGRJxjXo5WKgygsv6rWRSKRIk8DeyjGU7Ios2yJk0XcJH3YH23OIriUNVc1WuNZ7dtf2T3rVnkM7JLGwQFhgSaruZjD9Ou48WvnF+P54sJrt2uro/wZhz93KltW5my2X1Qy6+8F3p38OcMye7V2ftjubx5pTQ1MBzTRXK0WtNnatAp9sXhvsznY2/57sfnEDx5Fh+nX8+qnzt7O7a02k4m6fTK1Z0FgxiiGJOh2R7//56jC9Os43L794p4FPg7oebs9mwzDKpCG+d8c3nzxa+ulozn/2DjFtCWasbgAAAABJRU5ErkJggg==",
    "title": "Iconic",
    "desc": "Iconic — Free “do wtf you want with” pixel-perfect icons"
  }
])
// 动画
const animistaList = ref([
  {
    "id": 1,
    "url": "https://animista.net",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACvklEQVQ4jWWTv0tsRxTHP+fM3Lss/kDBFfS5KKsQLEzjk0RZsLJMpyTNIyFVQHhpExu7FKkChjT+A5YJBJNORZJNodiIoMWy+OQtrlEXlF333jszKXTlvZdTHWY+35k5c75H+CDK5fInqvoFMB9CKHrvxRjzxntfsdZu7e7u/vMuL91kfn4+H0XRDyKyaq2NvPeEEB4hEVSVLMtS59wvzrnvK5VKG8B0xdbarTiOvwwhmCzLSJKELMtwzpFlGSEERMTEcfwp8PHQ0NBv9Xo9NQCTk5M/RlH0VZZleO9J05RisUipVKJQKCAiNJtNrLWEEIii6CMR6T0/P//TlMvlWWAT0K54ZWWF2dlZjo6O8N6ztraGiHBycoIxBoAQwstSqfSHAq/iOLbdmo0xLC0t0Ww2OT095fj4mOvra1ZXV+nt7cU5h/eeOI5tCOGVisiC9x4AVcU5x+bmJu12m76+PjqdDldXVwwODpLP558/9unCBQu86C4CxHHMzs4Ow8PDzM3NcX9/z8jICM6599r9pHmhH/qg0+mwvLzMxsYGURRxdnbG3d0dqv9DH18tIm9FHu2QJAljY2Osr69TrVbZ3t7m5uaGh4cHusyzgUQIIbxV7/1f3dOdcxQKBQAajQZJktDT08PAwMDzfrfcJ83fplgs/uu9/9oYoyLC7e0tU1NTlEolGo0GExMTVKtVpqenqdVq1Ot1RATnnFPV1/Lk/59yudy3WZaRpinGGGZmZlBVarUal5eXjI+P09/fT7VaRVVJ03Rjf3//tQVot9trxpiStfYzESFNUw4ODlBVjDHk83kuLi5QVfL5PEmS/N5qtb57noV6vZ6Ojo7+6r3vDSG8zOVyGkUR1lqMMagquVyOEELmvf+51Wp9c3h42HpvGruxuLg4LyKfO+cWvPdjgKjqG1WtAFt7e3uVd/n/ABm4T2QjfJR6AAAAAElFTkSuQmCC",
    "title": "Animista",
    "desc": "Animista - On-Demand CSS Animations Library"
  },
  {
    "id": 2,
    "url": "https://angrytools.com/css/animation/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACgUlEQVQ4jYWTTWyMURSGn3PvdGoII9WUKJFpisZCRNLYEIxYaVqJaFdEaawkFrUQqvkqEgsWFthZ+NlQCxFNJG3CYmJDMmEj1Z8IC/pn2o6005nv3mPxVVURZ3PuPbnnufe8eS/8PSRK52sgeAUdDdE+MEsPxv7RrBDUAs/AbgVG5wG69PAfxKj53ArwDyC+FVwJSrEIHMh/AEdtlBPHoHwXzBWgrAzMoQj88o8LlxS6HSAittla8dYaa63z1sbPxGKdB+FluFSHRU8KlkMxmUyuLExN5d+BVoObn9kaKM9Zy2nngse/dIoWBvDQeRGkErraN2++MbZnT6oilVrtC4WSGRrKud7eYTsx8d2BnIXLtxZD5kcJ+uH8HdXp1snJQlFVdXq66HQ+BgYmwm3bbjq45K0NGn/2GYBE4ko1hOtTqaoGWHE7mSwvy2a/+FWrOqWt7al6r9TWVtiTJ3d48AAX4XQZ4A3A7Gy4FkhMThar+vo+Lhsfn9Geng+mvr5adu/eKCKi3ivJZMKAQ5XtUFXLLyO5OYi5XG7KtLQ80q6u/ebw4To6OvbivVIqOYnHLSKIMSKqLIv0WgDMDkPiU2VlRc3Dh0c0nU6RyxX0+PHHMjMT0t3doqoqzql6X0IkPgfh2E8fGNXrs5Drbm7eadLplAX02rWM3L//XAsFp6qIiKgIrrV1nzY11b2GqwOqKgCiioEDay5c6MtGmnsdHJwI793L+nx+zkc15/P5oqqqZjLDjQBBoL8bsb29Z9PIyPfeUkkX4smT99rf/01VVcPQfXPOnf2HExd+Yezu3aYTb958bc1kPtZls59jW7asGz11aseL+voNt9LpmreLAT8AfCI58UWK1dcAAAAASUVORK5CYII=",
    "title": "angrytools",
    "desc": "CSS Animation Kit"
  },
  {
    "id": 3,
    "url": "https://animate.style/#usage",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABqElEQVQ4jZWTv4viUBDHZxJffrwEISTVAyFIiF3wB3K9Vv4j21vcwjVC8LiFAxf2hPszrGzttbEXUkkaCysxxA2+uWb3bleMtzv1fD58Z948gJLqdDrctu0nXdefhBC8rO9q+b5v2LYdK4qSI2KuaVrs+77xGXisKEoOAAQA9CIZ/1dyDf6w5BL2PI+azSYFQUCMsduSS7jb7dJqtaLdbkdpmtJoNCqXvGw7fhu71WrRZDKhwWBA8/mc0jSler1+OU4shOCVzWbzkGXZnZRSf02UJAksl0uIoghM0wTOOViW9TcxEelFUdzv93tHKYoCiOjdSMPhEKbTKbiuC+fzuWznqKpqRXFd9xtj7CcingAAVFWFdrsNx+MRZrMZbLdbMAwDGo3GPxLx2TTNxyAIvqqHw6Go1WrLLMtUKeUXKWXFsizo9/vQ6/VgvV5DtVqFPM9hsVgAIj4bhvHoOM73JEmydy+hadoYEXPGGIVhSGEYEmOMPM8jx3EIEU+maT6UnvZbyZVDug3fknwYvpDEiJgj4olz/uPTP1IIwXVd/8U5/x1FkVXW9wdTOrrbvrboZAAAAABJRU5ErkJggg==",
    "title": "Animate.css",
    "desc": "Animate.css | A cross-browser library of CSS animations."
  },
  {
    "id": 4,
    "url": "http://www.animate.net.cn",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAATpJREFUOI2lkqFLBGEQxX+3HCIiIkajwSAGk4hJLpoNBjEZzObjiohRDOIf4B9gFIOI6TDKBZNBRD0FbzmPZZF1v2fY0f1YXe4Op71vZt6bed/AP6MyXLlmgEkDT1Bp+8kRSPdAgeEAVPfwOOgZJHAJaLHIvgbuzVRMzYWgOcMboNQImqDRgrq7zJKq29u+4UZW7JqGBdoqqi/bWALdgqZA96Z2Dap5+TDL/zLHRd5+q+BaEAq6CbRvoCNwAh395W4AOs1HTE+yVTqCV0FP8CBwMWip7Iv8MbugFYh68CK4E7zLfKqWEVRBLc+oHfg8g0QQCz4E2ixp/iHZzgncFWjdI3wETfQjmM6PRbugMVtHkB70af6O9BAUg2YNH4Mi0MKABJoHd5GbpRroPD/p/gRBrg7ZFQ6sPnx8AbMBzAzZzPqdAAAAAElFTkSuQmCC",
    "title": "Animate中文网",
    "desc": "Animate中文网 – Animate安装、Animate使用、Animate下载"
  },
  {
    "id": 5,
    "url": "https://blog.csdn.net/qq_27169469/article/details/117319552?spm=1001.2101.3001.6650.5&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-5-117319552-blog-131655277.235%5Ev38%5Epc_relevant_sort_base2&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-5-117319552-blog-131655277.235%5Ev38%5Epc_relevant_sort_base2&utm_relevant_index=10",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAB/klEQVQ4jU2SPWtUYRCFz5n3bvbubhISoyJiJxEsEkglghZJZUTUJkhAUoja2WihgohFQPAXaGVhk8rGRkQrURDEFOL3B2idkDXJ7t3Nve8ci7ubZOozZ2aeMyzmptAvSSBpBgkxgkQIkOQOkgCAZLeaJEi1NkBDWgeEzXUkFVZTuIPcaSjVkqPb5bEZTp/H4aPMc//0Hs+X9Psb0hrlILm9kuRw5+XbNjsPuX//yNEx239Inbbfu6IvH5jWISU9fzNlmV26FWbn/d0rf7SI5oosaPosF25gZC9iLH1ZzE0JRLeN8YnwYEl/fsSb8+xkTOvyiK0O9h3ERhMSAZAGgKTy3E6eppmePcHmOhtDgmjG2iDXVtjnAcAAyCNrDYxPSNLXZVZTxYIlZTmSBKSkciUrb0BSwfAe5DnW11DmUE7u6bhN3/opRHTbSALSGgSaARDAEOCuYmu72QAwJGq39OszLXDqhP6tKjrc6VEbTdUaHDugIufODRAt6OVTxcIWrtuZi6imCokGUkwet7sPbfExBqpy72Etc0C7xVMX7OodVCroZGquojHIoRECvvzG71+DnLRdSQPIWhiftJlzODLJ4VF1Mvz9qeXXevsCRcEQ+hN2Ps/UaaPIUWswJJKjm6EoWB8syZLsPV8PgiLTGlhHjIoFSaR10OQRpSPwH79sFlWOAVADAAAAAElFTkSuQmCC",
    "title": "Loading加载动画",
    "desc": "用CSS做的100个Loading加载动画_css加载动画-CSDN博客"
  },
  {
    "id": 6,
    "url": "https://loading.io/spinner/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADT0lEQVQ4jT2TX2iVdRzGP9/f+2fnnJ0/O5ub20LnkCKNGTFJbTNwigUlaqWiiF1UF+1GioQCobKCEoIkKi+EiKA/FxJBF3ZRCYJBYxs025xr0862k9va2dbZe87O3vP+vl2sem6eq8/V53nklx8v91698u3bE7cnM47j4DgOS4sL5tDRExw8dZpKsMibp08ycSdHOpWyfk1cUNXmpuzizkd7zjnt6/yfxsfvpD3PU1UVVRWMkfnZu3Tt2U88mSVb30Db5i2kUwmmJydxPY+FpWJibnbmcTeXm6r1a2JW1RpAVRVjXFbLRaLlWTSZpbP7MToBqivy8vNPaykoG9/37dzcX+I6jqv/wgCyVoq4PlKTAYRgPkcUrjDQ30+5VBLHcbHWGtfz1DXGoNaqqoIIrusSLBSkY9suEnXNiCifvH+OfG6cZDKpYdUSqwFVQBVT/HtJKmEokSJRZGVxoSDZ+gYOnezFGBi70cfE7+M8d2I/r796TB7aulGCckWMEQHEHDxynPpshriv1CZq2P7wDs68dYHWtvtQhZHBn6msLLPpnnU4Rujp2oJjBEEQEURVtVwsEAVz4KdJ1rfwXyJr0UqRj987S2tdlWcOdxOtVDh/8Qq/3ZomEfeQSrCofiLzP2SjiNs3BxgevM6B4y+Ak2Dw2nd8+tF53j17irjvkJ9dYqZQxHUNTjQ79EYmW0/zhnZK85N8+M4Zvvn6C4YG+shNjEJU4fKXn5Ou9dnReS++MWQa07S0NbK+pQF3fCJHfnqa7cZBCPljfJQjB3byYEc7164P8dWlD6jL1vHSi0+Qro0RVkL6+8bI5wsYY3CTqZTezY1SKhYY6B/AOB49j2wRvy7B0cPdPLmvE7WW2toYS8WyXvzsB4bH8ogIiiK9x/baahhKMpXSUhBIGFk67t/Ant0PsHVzC64A1rJilQuXvmf4Vp5MOgEKCOqqWvF8X4MgEMdxNebCryOTcuPmFO2bmnj2qV20bmxiqG+M4bG8ZtIJosgKoNUowjQ2ZIJwNRTP86wIqCqJuE8s5jEyOsVMYRl8l+k/C2tLV0VEbBhWaWyoE9PVs/e15pb1q2FYXTuDiKquKY3HanAdBwEcYxBBEaEaRTQ3NYT7dm975R+AXHYPSGrWegAAAABJRU5ErkJggg==",
    "title": "loading",
    "desc": "loading.io/spinner/"
  },
  {
    "id": 7,
    "url": "https://ianlunn.github.io/Hover/",
    "icon": "",
    "title": "Hover.css",
    "desc": "Hover.css - A collection of CSS3 powered hover effects"
  },
  {
    "id": 8,
    "url": "http://snapsvg.io/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACDklEQVQ4jX2QT0hUYRTFf+/Nm3HU17xwxspKJyg0SiODQogYmNoFUWEhQ9TChZvaJCT92xitRIoUCtpEpJvZSS0sLBC1AkkQLBxpaTij5Zg8nzNvvu9rIYbjOJ7dPdzz49zroZiutFYQDL6k/uhJZhIfi61pBc6l60HSi49ZSLWxsgxCgx0Bm3BVJ6WebuJxURwQjT0g+f0Rzgr4ysDcPYzIBUgnj/PrL+wJwYVT1+h50bce0fMAq6HzmHUQ2J/AOhJlfDDCxFAj3n03iNQtGR1RPLHasxsjRh7AkFBSDSV7HzL85NN/PzH42njTe0xXql0klygOQIJwQFColA1SFUTyT5AKlGIrgqbWXubZ5G8CyDWA0k4UAISo1xSQy/fz+6yKLEjwaB00tl6lwmjz3zsYVqbvmbaYK0WC5sXNAxd0PdPWTFa8Yt4tx6+jVfsxopXotea0zLgxt+X+t+INAONmzW9daVKOL5Eb+4OasXF/2lDlkyiZLjht4+B/1/VBt8rOaVYpaqc2pkbnnjp3pyxCZjuSw2QzIDO9TPXf2rKBbvpNmUjhDv1ALHvvMNA3CkBDi8H04nPKdwHe8qInZPsnR3JvvzYxOw9+c4RDkQFPgxUUE5OncRwQaQjUfNn+iU0XD5Cxu0gvNLNigyMhaAmsUDdSdTL53t4esK7o5TBzqR4wZrEqb/M57my19g+9csHTQUfsRQAAAABJRU5ErkJggg==",
    "title": "Snap.svg",
    "desc": "Snap.svg - Home"
  },
  {
    "id": 9,
    "url": "http://shouce.jb51.net/velocity/index.html",
    "icon": "",
    "title": "Velocity.js",
    "desc": "Velocity.js 中文文档"
  },
  {
    "id": 10,
    "url": "https://wowjs.uk/docs.html",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5klEQVQ4jWWTL1RbMRTGf2cH8cUlrpFPDkclsnPMMTckc0PiNtm5yVUimaMOZCU4cH1ukXkucbluE++djpZP5Vzx/bs3/D3An/uvh6M9tJJ3b4B3HMCA/uHH4RiAl/UV6+XZ3uwNATWRHu+woZ/oRjz9viClRCHszY92ynUgbb6j2QlRkZe7SxQiUiD1z9QiUn7raueg9jdIAhcAaOooRHJphK7DR8f9U+LkNADaJxieVkji0/UD1golJ2I3J84iDkOIrutYfZtDzmB24MCLgkdeyCqxOyH1z9w8ZG43CQPMGoSIgug3VwcdhGPY3nO7PAccopByJfUDF+dn+C5CyRgQYsFqeU1g0AofvtxQmvFzec1i3rFYBM4+itoABRQDWAE5qNv/BEN6pNQxU3AB5zxDATk/pg8OrFFbHZWtjlsb+pFAIUJNzHwgxgglUabinA8YDQDhkByl9GBG3q7HEr06JMfpvMOssFytWf3aUJuBFURACpPhNjkw6rCdOpDAGpefF9RaaFTcpAlgVpAiZgVKPx1dwaRXa5xySYZDgGhmSAH5gNVMswoOLBfCrEMhTg6mozDLMGW3cfOUmgBw8jgJTITj98jHncOjob8F76EZ1EzOacorQtcxyjaQIX88CQhs/Bj/ALNgIj92cGh+AAAAAElFTkSuQmCC",
    "title": "wow.js",
    "desc": "wow.js — Documentation"
  },
  {
    "id": 11,
    "url": "https://blog.csdn.net/rensheng2020/article/details/122537201",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAB/klEQVQ4jU2SPWtUYRCFz5n3bvbubhISoyJiJxEsEkglghZJZUTUJkhAUoja2WihgohFQPAXaGVhk8rGRkQrURDEFOL3B2idkDXJ7t3Nve8ci7ubZOozZ2aeMyzmptAvSSBpBgkxgkQIkOQOkgCAZLeaJEi1NkBDWgeEzXUkFVZTuIPcaSjVkqPb5bEZTp/H4aPMc//0Hs+X9Psb0hrlILm9kuRw5+XbNjsPuX//yNEx239Inbbfu6IvH5jWISU9fzNlmV26FWbn/d0rf7SI5oosaPosF25gZC9iLH1ZzE0JRLeN8YnwYEl/fsSb8+xkTOvyiK0O9h3ERhMSAZAGgKTy3E6eppmePcHmOhtDgmjG2iDXVtjnAcAAyCNrDYxPSNLXZVZTxYIlZTmSBKSkciUrb0BSwfAe5DnW11DmUE7u6bhN3/opRHTbSALSGgSaARDAEOCuYmu72QAwJGq39OszLXDqhP6tKjrc6VEbTdUaHDugIufODRAt6OVTxcIWrtuZi6imCokGUkwet7sPbfExBqpy72Etc0C7xVMX7OodVCroZGquojHIoRECvvzG71+DnLRdSQPIWhiftJlzODLJ4VF1Mvz9qeXXevsCRcEQ+hN2Ps/UaaPIUWswJJKjm6EoWB8syZLsPV8PgiLTGlhHjIoFSaR10OQRpSPwH79sFlWOAVADAAAAAElFTkSuQmCC",
    "title": "使用wow.js",
    "desc": "【前端】使用wow.js这个插件（实现页面动画效果），提高前端开发效率。_亚东同学的博客-CSDN博客"
  },
  {
    "id": 12,
    "url": "https://css-loaders.com/hungry/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACfklEQVQ4jcWSXUhTYRjHn/c9Z3PTs7a1L5ky58dW5JoXQlSkTiFNvZkXx5YRrSATjG66ECrqRJddVNClZPhBtAi68UISMboQb4pQMiGiMdTp0i33cXY+3vN20QcSFXUR/a6ehz88z8P/+QP8b9DOmud5nEqlUCgU0gRB0HieZ1KpFHI4HLS+vp5eBwAkCBoFQBCLYdTbS3426Pf0U92PFyAAoENDFz3x+MZRWZYtRpNlIeiyz71ZXe0siGKNqKqr0VN96eZAZY+U26wwGLkMw9lnrJ79owgAYOD0id5PRe2+qtEySrU8y7IEIRRXFNWv1zOJgqi4fB676Xx3AFRsoFwJRmaXFzhfUyNz8+qF6sR6dqqowXuzzdXmr/UOESm3WZTJWX2p6fLE2Gjk+eSEVI6S7Wa3P25t7BuwumoeZYvKZJnV/Yypq/JGFMr2lHCOM6PD9+ZmZ2dJT3Ng5WNOjciSFK7z720QJVLtc5v8UnrFWkgut7I0bzE7K+dZo2UJq5R+MZBF3xzFV+6Mr7UHaxtKdPgaZ9Q5p6Znjt198lJj7HXzGANJvnsVTr198TSTWOpnjne1bCW3sv2yJO072NI+Fe7uyPtq3G2LG5Ln4fjYyMLi4kjbkQMkubndusvbcOtQx8nHVM4H0h9e21hTeQ4BAJyL9kVyIhlWNarDGG8TVTEgjCWMMQKg67JMqoL+itJoZxAUgogiZphSi5s49xwOf3/jpcHBqvV0uksDsGGsn9/NMWuZbKFVQ4yNALN8+8agU6fkm/LZbQdnsSf0Vu8Dzl4x/ddBio5Qw680xPM8EwqFWEEQ8M6e53kmFosx9OsiQRAwpRT/cXr/KZ8B6/QJd/H6B0AAAAAASUVORK5CYII=",
    "title": "Loaders",
    "desc": "The Hungry CSS Loaders Collection"
  },
  {
    "id": 13,
    "url": "https://animxyz.com",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADAklEQVQ4jWVTTYibVRQ99733/eS3ycRkwMx0WkVRuhBtbexCDSJa7FLiUpyVhSJWsQsX0mRRKIggQhFFSGEQabOqLjplLDNQ6vhDGS0oM0yHse00/Umn0yRNvi/fl/eui3bSmXpW997F4dx7zwEewXJ1m7te88mSZIAG/YZ6HQQAzCAi8N1f9+2UEhPQOCNaweexN6bqAMDVonv7bHLM9+BANBZHa7PeOoHaQMSBpu0ukAPz+yaj3m7/vu/oncPRmcYE78BjTIp5WdWzaqMC8VAdgD66zOYKRXhO16Wl5+xj6Q/8KWdvuEcvyYZoUq+1oyv+T1C5v0o82mlCo9E77T7uTbl2uCJu6RjS9Jo5EDnifyZf7+ee+PbnewBQ5rJ4eAOACODFi6VXkxM4gZtIcJY9SoJR6EPEjHQdTgdaLFe58PEnez79CUR6oKBSfc8BTw41f0i9SNflsI6KLoPQJ6l1II32pWkFdsMYjOTlWmX8YvWLjy589TIAqP3nv855PZ0twGcTUl6wYZ9s5hBs9TRAQndtB6GSImO6niOMlEbvZpJvfTh3bFa5wmRg89Zs0wu6cSfODLJCTY1EDP+OpKWfIB5VdzmhPW4Lm33IiGIWIGwFoy++fOnAvLCCJaU51XNEhgGzNJbGHzvzdGV0C1+VKXke28WcGJWrIiq6sEcAZABztO5g98BZWT4ZP3HkXKWddA4uPDnUVNrovlIIkoSebVNLuIkhqydy4drkb9h26Piu8fnBEaeLRdWgd+49f2Hl72f/uWVGrrU6zWTEupOOuE03sqWj7EyUwoVCf+mb/a3J8vFd4/Pl6aIaOLE4M2MAILCVk73Z0XtPL17OX2tbC09nh9fGYo1UtP3ju53ZX1z2hltuVoKZyg/eeN+WpRKhVgMZyNCSDozJvPDnyl+vnL10GPUzsziUSq8+V8i1RdwRPb8NIt6UhUqt9mDQv0SkLjPw/e28/V3i1KkbADD9zMHOU91z7Wjc8gMlVh9N5CZcLb05tCG+m3xfLm/uAeA/E1pT+n0I6w8AAAAASUVORK5CYII=",
    "title": "AnimXYZ",
    "desc": "AnimXYZ"
  },
  {
    "id": 14,
    "url": "https://jellykaiser.github.io/popmotion.doc/",
    "icon": "",
    "title": "popmotion",
    "desc": "popmotion 中文文档"
  },
  {
    "id": 15,
    "url": "https://cssfx.netlify.app/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAA7UlEQVQ4jc2SsU7DQBBEZy5nbOlwULAQBSIV30ABLXwbfBJdPidIFgRjO7F95xsKokBBgRvEaIvVakd6s1rmbokpMpO2/8RgJZGEMTzMBEKHHgABARGSZEkqxrFtBIkmkiJEfhYIgSABOGMNaTWOxrni7j7jLN11We/T3ic+JD6kQ7DeJz5YPwZoVT838nvD1cPjpclO1+V5WRWv9Vm5OXlrik09r9r8vV00/UtXXzdPVRwmh+ZxdmGcW9zcZpyl2y4bvpCO+pAEb31I9kjrRiNzt1SM427769ASjbH5fMJZASBGfQMVfhbJf/hLH6PTj4OrWdY0AAAAAElFTkSuQmCC",
    "title": "CSSFX",
    "desc": "CSSFX - Beautifully simple click-to-copy CSS effects"
  },
  {
    "id": 16,
    "url": "https://www.transition.style/",
    "icon": "https://www.transition.style/favicon.png",
    "title": "test",
    "desc": "Transition.css - easy transitions with clip-path"
  }
])
// 插件
const pluginsList = ref([
  {
    "id": 1,
    "url": "https://dayjs.fenxianglu.cn/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAv0lEQVQ4jWP8nRDEQApgIkk1ORpY0A2ISkZwvn//t3cbw6cPeDW4eqFw3bz/9rf9v3UVn5P+37/7JzH4T2Lw38ndDBwcTBHxxPrh/7kT/86dYlRUZpSSI0oDAwMDw9s3DAwMDBJSRGvAAAQ0MErLMTAw/L9zAy6CHkoMDAwMnJyMRhYMDAyMGtqMWjr/r11BDlksGhglpJhzSyHs//fv/p3ZjyyLruHv5G4E58Wz/88eoSlA1/D/3An8vqJ94gMAL003TRu/CZ4AAAAASUVORK5CYII=",
    "title": "Day.j",
    "desc": "Day.js中文网"
  },
  {
    "id": 2,
    "url": "https://www.wangeditor.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAClUlEQVQ4jY2TX4iUZRTGf895v28MHWd3lEVYtqsgQtMMoQsvZFi6qBCii52rpLowUQrc9aIuRD4I6iJhRInKhl2CYKGFwAIj+8MEReBNkBR1kYSkFEW7szPKzs73vqeLKf+AFx448MB5OOdwzvNofK79B2ILKBf3Fg7gPgBWMmAL8K17vOCuqkREunuvlHDckPqSmrh2ZDLlZUzne60X37zHBQAYO9aeMrPdmTtuUp1GkTGx3YDIUjPewZ75MMASMMP/NblXkTyTpORpnU5R0igyOkWsvjw/kW2I+z1ZNijLz9ZON68wMxNYasZNs+/uDLJHgOAe3RwGgl23D1TuB2xjfT7U6mcruQ4CUH/cAHLZ6wZHk+tvMBkxXlAI0xxdGKdTlABB/ly8sfJ27C2/Y2g/AGcPDTnyVlWyRkr+vhldhSBz/AOFythmS/sAarPtx5B2DeL6ybiuM8DDlZfOPASwOc+nySvVKO+4M+HJ3brd5U99uLZs+BOAjHSAlC6ttY5c7m+98jPO5Y2VDU9RFBaCPePDwe/XW4cuId0nooz5V3q4f2JiGnBkTztaBKAoEnAeWeM//KQnPh59IeW4MBpFFp2PHH9gfK69gLw6SMPFm9rxchHXztps+ziwDeI5gCQ5AqNTlL3WwXO4roZt9z8PfLl26vBvgABWW4cvyv3PfGLyNfBfu9f5BsASCXc0dmzhDTx+ES3EjLS7jPHz/vfXfuHBa2Jy0vlxu9emVvdY0F4v0w/dq2Nf89dPGn90ah6zZ7Owqfpq6q8M+ydfOAF0borhFmIVLjLKW4ba0+6ZkOpz791w8Z07XxleS2goye8g42ZgKZEgMTKTNXF2ZI5WwfdJNg1gdzGORufAbMS4zc7//Auk2CWLDKWXXwAAAABJRU5ErkJggg==",
    "title": "wangEditor",
    "desc": "wangEditor"
  },
  {
    "id": 3,
    "url": "https://www.jquery123.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACMklEQVQ4jZWSTUhUYRSGn3PvjDoZlmDaj11F3bWQMIiICItAoUVI3SwIIshE8I6Q0Soy2hQJOmZFq8Ai8A7mJt0UCS2CNoEQBNHfzKRYMYWWKN6Ze9rM2Bhj0tl97zk873kPH6xVPROBmovuhtXaRj5xc6e7qaprZAuA9f1ri7dI05qArecflgHUdT4oKRTCKU+WABCjUaBhVUBF91Cx5UQv+0sBAVgyC8+ocGLqVksSQEQfAxe2dY5U5gMEClKhHkQPzAzYVwBQrQBqsgOxfnvMCrtjppFOWI57Ds+Lrq8Izs8l2WOa5ltDVNuB6T876QuAqrB7MivFI/ZhhAjCIAXByV8/GDVEdgfTC/NihV0FXsUjdianihWOJoHSdCpQlo0CUH36XpFuLN7p+/7PxEDra4AswI9HbDM7WNUVbVbVcSBp+v7BjzdbJ/Plt8LuIbEc9znCPhU6Ev32nWWIM9ytIjcyzxFVuQ/p9wZmiRrsR7VRfekVy3FPIQwBi75B3ec+eyoH0qgiV4G9OcZzAm8ULsUj9hNpaLsb/BYqnQVCCLFAIfUfrtuzuavWdj8q97xUvaKG6cnkp9v2TLYnOU7PMlpCVNtjA8fH8/6cTG3vGj5ioHFZFpzhdhFZvgHKUxXtXeHYMxGoTn7ZpaZxDZVpkUCH5FIrHbfJEAaB2r8M54BFoDx71HjEPgpgrph6GX0327xjsGShPCaCqVAkEALWAZ4goz7G2UTkWN+/4v1X/Qbv5dXyC3EahQAAAABJRU5ErkJggg==",
    "title": "jQuery",
    "desc": "jQuery API 中文文档 | jQuery 中文网"
  },
  {
    "id": 4,
    "url": "https://typescript.devjs.cn/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABfklEQVQ4jc2STyiDcRjHn+f3/n7vbDYmNmOxKIU4u3BDLTm5u4gjF+VEKTVOykFJOXDkJqFE4mCHHchKSS0ae/2ZZnu3d3t/7/tzMvYWtZvv7fs838/z1NODMH0K5YiUlf6fAC1xwmIQ8EcdSwFK0OeSKcFiV+Omki5UMFLrYKYQySzXuEmL4+pd8s5oZ5Pbxk2BAEzC8H167eJpsrex3etAgK3I89xh7HtDJm9sRhR/tTzR0/Ce4+thJaUZ84OBZrdt5fxRgMjpJkH8AhBSGl89i3ucbKS7LpbUQkf3Xqc81ed/zfLtq5dbRZUoMYTlSgSBIAACIEr4ktX3b5IdXsfeWNdMf8Btp2AFSqUbYvYgNr17pxsiFGxZCLbIlPwFUAkL3Fw+eRjeuI4q6kBbja+K0d/SQoDXyZaGWqMJlSB6Ktndm5bJG1bAECKeyifSBQDI6iYCjPc0AMLlk7p4/JBUOVreWyLor5J1UyQ+CgLAzkhdJSOIb6qeyXNA/AQYcJ2NnjtVaQAAAABJRU5ErkJggg==",
    "title": "TypeScript",
    "desc": "TypeScript 中文手册 - TypeScript 中文手册"
  },
  {
    "id": 5,
    "url": "https://www.markdown.xyz/basic-syntax/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2UlEQVQ4jdWRPU7DUBCEZywOAB3lyh1HoOK9qeggR+AkcJNwA6Cisnm5QUoay+5SkpJqlyaJTAAJOQ1Mt6vdb/YH+PeipDcA64n9S0jqp7pL6qtRcJdzft7GKSXLOb+Y2e2oZi5pPobsABFxQfJS0oOZnVZV1ZNMe6YpIuxbwEjXdV2vfrvGPmAAcA8AJGfbpJldSVoBMJJJUvw4Qdu2NyRnXdctd9RheHL3MwDvmxp+AZAcABQAaJrmcXOXAmABAKWUtbufu/vJJ8dD33gUEa8HQI6nmv8hfQAamEzRY9ipsAAAAABJRU5ErkJggg==",
    "title": "Markdown指南中文版",
    "desc": "Markdown 基本语法 | Markdown指南中文版"
  },
  {
    "id": 6,
    "url": "https://www.npmjs.com/package/vue-lazyload",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABJElEQVQ4jYWSPW4CQQyFP3uGREqEFImk5Ax0tBxgLwGn4CSchxKJvQF1qtAFIcLP2ilmmd1NAnHnN7af/eZJCQ4ChMCdqKpUFgEBB6uqO/WahqYGg4e3t+fx2M0AEamr3B0AUd2v16ftVoFSdQWbonB3czfvREY2RbGCUjWmgW51JYBI5hEwM0TcLKGRmrYTdji8z+fn3e5lMhlMp82De8zz6tXNRNXP54/F4stdjsfX2QyQK7n+HH7tj4NBDCH0++09k1w3haeqMGtE+6fhRtRHZx1xz0nGmy9xV7qMzS1/oxJTr6iKCFftpddzkQYHUU1EUv62hqqfTp/LpV0uj8Ph02iE2b4skzWkBJL5uuSaTdlKa/Ml34a2vd0xcxCRoErL3t85nLmIk9I1cQAAAABJRU5ErkJggg==",
    "title": "vue-lazyload",
    "desc": "vue-lazyload - npm"
  },
  {
    "id": 7,
    "url": "https://www.npmjs.com/package/validator",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABJElEQVQ4jYWSPW4CQQyFP3uGREqEFImk5Ax0tBxgLwGn4CSchxKJvQF1qtAFIcLP2ilmmd1NAnHnN7af/eZJCQ4ChMCdqKpUFgEBB6uqO/WahqYGg4e3t+fx2M0AEamr3B0AUd2v16ftVoFSdQWbonB3czfvREY2RbGCUjWmgW51JYBI5hEwM0TcLKGRmrYTdji8z+fn3e5lMhlMp82De8zz6tXNRNXP54/F4stdjsfX2QyQK7n+HH7tj4NBDCH0++09k1w3haeqMGtE+6fhRtRHZx1xz0nGmy9xV7qMzS1/oxJTr6iKCFftpddzkQYHUU1EUv62hqqfTp/LpV0uj8Ph02iE2b4skzWkBJL5uuSaTdlKa/Ml34a2vd0xcxCRoErL3t85nLmIk9I1cQAAAABJRU5ErkJggg==",
    "title": "validator",
    "desc": "validator - npm"
  },
  {
    "id": 8,
    "url": "https://www.lodashjs.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAByUlEQVQ4jX1SPWsiURS972N0pnid2G+Kgf0BigiKjaCyzZBUNgpC9j8klYV/wMHAwBbZwsJ6sbMZMCyLjdhYTWth446wYUZn7k3xyGA2Iad4xXv3nHvueZcREQAQEWNMn/AphGmanuc5jqNLNS17JiJEvLyR6/V6uVxedtBMXSqEyErTNBVCSMuylFLv5YlICLHb7VarlWma1WpVKYWIUitlMppDRJxz13WHw2GhUIjjmDHmeV6z2YRer2fbtjaKiIh4Pp+JaD6fA4DrunEcHw6HwWCglAqC4H9CmqZJkhBRu91uNBrZ0HEcF4vF0WjEtd0MACCEIKIgCCqVSpIkSZKkaWoYhm3b2+1WZglkE+s0LMsKw1BKGUWRju54PCqlOGMsl8sZhiGlNF7BOe90OtPpdL/fm6YppVwsFpvNptVqsW63O5vN7u7vGQAicc6jKLq+ub76clWv1/49P3+/vT0c/j48TBzHeXz8Keu1WhiGv5+ekAgAOOen06lcLpVLJd/3J5OJ7/v5fH48Hvf7fSHEm0V4CwJ4v1ckf/yhX1uwDMh47PULCREJOedAQIQnFN++Mik45ATkJHzQifMLuoAzE5w+sfQxXgAhDhrWEFGUMQAAAABJRU5ErkJggg==",
    "title": "Lodash",
    "desc": "Lodash 简介 | Lodash 中文文档 | Lodash 中文网"
  },
  {
    "id": 9,
    "url": "https://smartprocure.github.io/futil-js/#on",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADUElEQVQ4jV2SS2icZRiFz/t+3/dfZiadmYTmVg2pGEmlIkpTTaHWlSBKIEIMaL1QELoTLURUlLS2VmlQQl2plCLFRaItVKLYFDXakmJUai0S06LJYKKTDCHJZDrz377XhZiCZ3E4i+fsHsLNEGSjU7vf636pqT11QAchObV4ksPkQqVQvrh0tTT5zejS+s0TAAyCMQgLADuO39+Tb/GP5Brc7Z5NxIeluhTDswlUEEVcsyUBT81Nrw6dfPHKdxoAYRB2y3Odd9zS3Xgo2+L3p32GCqNYk1WaIVSNEqUlqc87LsJqI4UrYclJQvRBaQBy1/FdA7mtm97ONnvg1RpUEItRgAMkDoukPDYZDV1ZKk+Mn++4cGm2p1Ib+eQK8GtCHW90PVZ/Z/2n2savmlrU5jF6c/WmflOaddYneLCIStW56mJwdPiZH95XvaceaW7PnbBxuFz942q/au25rT/T6D0Q/l4avrj/0jvXT88N5TvqxmQ1vJbyeHatsD4+Njy774vhmW8BQKZPzzjt9wRO6/a99sby31pLHLoeUfbuxs8eHX1wIiqUD3554MevAfyE/6XhyaEut7XjELm5hySuWWEVacXMygppSJBp9vaYLH+196Pu0eIvpTfHj127LAA19L28zd+2a0B5uafYy3KyXo5EYgMS0oqsGLIwsExVG7uKuLEz09fU5Dy8dfPintTCKbe189Zz5OUzSXlFkmo1JqUgGmAm0poZDgEGIJeIDSxQi6tNzV4mvejep8I2Mi1bMlGpVAWTy0Yra5OENAAm0YasOIB1ScTAwlGAgWiVJOJqCqzSAKyQVpq0hlgRtiRWYgutLCsrvp8iNiyJgcAgIVeJaAZZC1JCRMxERgsZJmICjEo4lWYi8jlZCc7W/roxnU4pz3eIDSE2JCCif90WSyABFIMUx+x7rFIZL15ZmLbV5bN64vXLU2jCjieOdr3Q0uINbG526lCLAxERAEiIRUSEFAtn8040X1gLFgrH5j/c/y6KxQpjEIwiKh/vmzo8c764s3S9fMYm4hpXERFIEYhdnySK3ODP386sTX6+c/5I72EUixVgkDck6RuB+m8/f+Le/oPndhde+aDh6fRr3z97+8mf59reGnt8Ax6RDfYf4210gzGEhyAAAAAASUVORK5CYII=",
    "title": "Futil Docs",
    "desc": "Futil Docs"
  },
  {
    "id": 10,
    "url": "https://www.swiper.com.cn/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB+UlEQVQ4ja2TP2hTURjFf/fevJc8rRF00UGCHURrxVBbUAQNhQgiDiJBB51CiFSXooODuCi4WSpYG0QcLF0iCB0sFLFBEFxS2qVQkbgpEtDaxvxr7rsOJs+XRzsIftP9c87hfPeeTxCoTLwSN0plXWMSAnoBDJSkEAWhde7pYs+iHy86i1SfsaOR2hhwDZBB4Xa5wORa3RnNL4umJ5DqM/aOSG1WwHAHefqiYjCpsMOwUnSZm2pRWf1zZ+Dtet05m18WTQkQjdTG/OQLIyEu37L4+tmwUnQZOqO4Ox0musuzPdx2i8jEK3FXymLHtrLg0XyEl+MbzOc1AGEHBpOK9zO6qx3pusekUSrr7znsQNgR/CgbD9moESQDSKNUVrrGJPyn1TX4uKC5NGoROySCpO4XNSYhO1/lr8nbTcpfDHdehLnx0N5SSECvSA9UG4C9GeDoKcn5jEXsoOD18xavJlpBSFMaKG1lcemdy/2rDfLjG5xLW/Sf6I6HgZKUQhSCRKenez83pVktG/b3dwtIIQpSaJ1rJwyAIyclD2Yi7In97Xv3XsH2nfD9m/HzXaF1TgCkB6qPgRGAkA03n9jsOyD5MKvRLRhKKn79NNy70qBZ9wQmni1su75plEMWJFKKw8cVKgSfllzeTLeornu9e1H+P8Pkr38d59/KCMh06foAmgAAAABJRU5ErkJggg==",
    "title": "Swiper中文网",
    "desc": "Swiper中文网-轮播图幻灯片js插件,H5页面前端开发"
  },
  {
    "id": 11,
    "url": "https://h5player.bytedance.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACeklEQVQ4jXWTP4idVRDFf2e+e997eUl2JQkoNqkk2WCR+KcxIIZN1k1rt50K9gEJVraCNmZJqSSVpQiCIcpmVUQCZm1dSxURRSImWYi733fnWOx7ksYD082ZGeacI2YwSGCDGK+dh+4Crku0Ai7bZNmAqxuCnPcCaEYOQXph9Xly+i7uXiTHHVkhy35ZjazfQLwl3v9uztF/mx879wo6cJ0cLbjJuKbcQZsP6QJPRcYDyNfE+sczLnjx7HOuo025HHaLHtdCVhg61I2hdXjoUJYBjytZH0Aui/U7MqdG7dji512MXnKqJ0txHxLFOZlKfz4kYoonU9SHyTLgaSXzazi6ov7omeWi8U1QOIoYQi5jc+VNcfoE3NzCH2zQbf9uTxak1pmsxjXJuFiCuABZbDWRePch+exTirUVAvDScVg7R7t8TfHRbTM+tP/37AqRKxG0JdwS0ijxsEccf9zKxMOA+4F44gi6fok8f0rs7kBNiMGonQx7GCADN9uZ0EinJFmSZ3IDIqMHDUYDRA/qCe3truPhFymryELI/PSrLYmuk2ol/7hL/8Y7xJffm4MVswcxiG5ve1/G6YknqaOzrvG6slttJdJX3lY88zT5xbe0a5+q/PCb4+CiaJ3JkeWStFjVo7YE8JHT72Eu93YynYq/dlTGB+zJIc1lVE5qS77qdurLcyuLfWs2AB878xl0F2lurqNOCDvAZVCOKlnuY5Z178ZWzAJhQTN0AAz9hzDIYdOG5paJGwpXx3Af/nlV925sGRQ8gvkF9Du3yeFn4SqySNnhTGe/KXaX9ffmJ7MwWfwPfPjkC9R6CUWF+BHKLe7euTWP/Pxv/wIHI1SRV4BjoQAAAABJRU5ErkJggg==",
    "title": "西瓜播放器",
    "desc": "西瓜播放器"
  }
])
// 图表 echartsList
const echartsList = ref([
  {
    "id": 1,
    "url": "https://www.hcharts.cn/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACdUlEQVQ4jZ2TTUhUURiGn+/ce2ccZyYzi7QsKrBFUYvWQbSoRa0EK6gWYmWUtCz6w9y0qVZSgRZMKSEmFLRIM0qEWkgRFfQjGKaWwTBj5kyjM3Pv/VpEk4LQz1me930fzsf3HviLc+ryQFlTrK9oPs38KXx7l1pkwifimVT1fwEGNybX2l5kn4h79lBr69p/BriWW200sFz8wDrFPlPf0lI8W7fb4r07COi7FSWBsa2y1Z0tNl2Il5PzahAL2wsD7PFN8CnQ+vsFRo+IK31jydzNtkRv7a14b1WLPncAyOt2RDYAOG4EkCCqJ+tb2jcVACJ6B7RcYK+g132jj4uTyY7YaPdRzEQd6tuCYPthRC2A1Z5452pjsYUAti/WI0v9IYX1gAVUipHKbGK6OpfpF7xSjF2BEEE8C3U8DOy0clY9qhcFoC3xoFngWGF4hfHecU2+SIoYAMEnwODkJH7UYcHSKEXRoi+OMXU2gIjeR+UgEEIgm8xq6kNKRGTWunLkv6b5PJTCCdpEl0QrSitLGw2A79jPgDe/zFODU+Sn8vA7jwhEioMEQg4lFSUsXrPYDZdFnhQs7Yme84icdtMuI50fdTo+I7MAnsC7pDD6vaxoW2hhyDGWDKg6NYUi+cbqFpFv6eE004nsz7CSBvNQ1Trs4W3TqrLG8KJwWkSyvkfz9UP7P9mFxnmhV3526uXk229b1NMxjHQbpNNVd+DSpePfAWqvxLAcEqK8D7qZewAFwIElm1PNfV3XZibyPVjW3eHhZUNdXbu9Ob0uZlJyMqDKjasNDek5AICJ/jcd55vOKYjO9y9WjYzkxitWXg5nIq9/3f0AaDkB4tcp4qYAAAAASUVORK5CYII=",
    "title": "Highcharts",
    "desc": "Highcharts 兼容 IE6+、完美支持移动端、图表类型丰富的 HTML5 交互图表"
  },
  {
    "id": 2,
    "url": "https://echarts.apache.org/zh/index.html",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAwBJREFUOI1VU0tonFUU/r5z7z+PdCaPhjJjKCi2EhcmpFQIpJqq2C4Ei21xKxTfFN2UYheKcSF0EReiLhTBjS5cGBcRiq00VgtiEMUntVZb2tQ0Kiammcc/995zXEwM9ewO53yL70V0hwAMAGZGH7xPBY8R2B3N6iTMgdcIzCHh7QPfz565EcP1Be9uH++tVmrTRhyicz6YwWAGGKDGAgVqFsT41vnFi88dXfquAQA0gO9tH69WqrXZovjJ64gpNluWWrkAJIXwlU0mXlSTSX9WkGYMp9YW8/2/LZ1seQI2U6lNl5yfXI0h76w1s8GR22Tr/RMo9Pdi+ccLuHLyM8ZG27lyyf4Jed6XFfdY3Y5PLeEZvj/ywGTm/elEWGe1IcOPHuSOI49DMr9Bb/ncr3b22ZfQWFiCK5UMpurpTFO4WxzdU06c66w1UN81xp3HnqZ4j9QJ0JRMQ7SB27dx/OUjXdnWdXNEBsoTQsHuCDUNUW55aC8AWIqBUshAEdIJVdW23DnKzSPDiK02IE6CqpG8RyJQT6pwmWdxoA8AIM6tG2Bdb80IEsX+KlI7NxEwmTKaDglgRiE0RLT/Wkb33zasJgmKwGIymKG8ZRAxD6CIkTRxkEUxAs7ZwqnPu9aqdYNFwJKCJC5/fIYr5y/hrjdepCsVDXkHmbirAtinDmChukmvzn2Ji7OfmMs8TJWW1KBqGhPEe5PMQzsdTLxyTIvlMmOIc+7g4LY/nJdHtMudv899wUJfFYN3DEOcI50jRVC9eQgaA+ZfeNUsRuR/r8TrlxcOEwBmxva93uP84VXt5JYsi80WN48Ooz6xA6XBATSv/YnFs19h5edL5sulUFUWc+r0gR9OHOUUILfW9pYrNxU/7PHZnpUYVERSaDadtjsEDCDNlYvJl0quVzJpa5otrOYPz184ETbS9ubQzp5abetxhT3pyEKAwdg9C4nMCNXUJvnaN1//8vwUfur8V8n/1fmDsX27QDtEw73RbAikZZQrhJ021Xf2f/vR/I2YfwHivHcfpDD1jwAAAABJRU5ErkJggg==",
    "title": "ECharts",
    "desc": "Apache ECharts"
  },
  {
    "id": 3,
    "url": "https://visactor.io/vchart/example",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACJ0lEQVQ4jV3TPWhlVRQF4G+fe98L+kRJobUyjIVILIKgZDIRxEoLwWZAmGIUG0HrEcTBPwwMojYqDCIW1iKihTiahMyAkGZAC8WA2oh/yPAczXvn3m3xriF6qlPstfbaa+0d/v/W8oSx03onpGMaY72fhU+kt23F5aPlcfhbyYllLyieECZ6pF76XPgRDyqW9d4w9ay9uDYQZFh1oxt8aOSkucRMY6zatB1nwXrerPGpsbsc+MLUw/ZcLUSaODeAZ+gUY53vXbW5aJAjO/GLztPmDrTuM3GOyLCW92htKRq9QGo0qkdtx/tkS1SyQe+kC0bOqP6W7i9GHh+MSvQD+LMFmAUY9ESqnlf9pLWEM2EjvxNuk1JI4UB1WuO4cIvOm7bj2wVHFqK3kU8Zed3cV2EjuyGNXqtRvYexsVN6VN+YWrPn90FJWnG9ZRc1VguqlAo6f+i9IzxkrqpmWrebeI5YBAtX4k/pLGrBvhCKBuft2Na7omgROp3iMeu5QuRh9NtxUeeZIl0yEub2XfMWkTovSRWN1CuuU5wnh8WLhZKteLWoLuhU6TVfxm9kazc+Vn2kUYQyqHjAukcWo2QZ7IjiUlzW2VTtgTsUsggfCCmHuUnFy1bzpsEPxMD0q1f0fgBfx2wouFse3krozbSOm3jx3+7QDqAppmS41zFLTklP6iSaweQlaSr8ddSH9r+3HGmcy8Kd0r50qzCX9vV2dd61E7tHEf8ADvfkkpiqahYAAAAASUVORK5CYII=",
    "title": "VChart",
    "desc": "Visual chart library VChart demo"
  },
  {
    "id": 5,
    "url": "https://v-charts.js.org/#/line",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB9UlEQVQ4jaVTT0iTcRh+3t/3zaWbO1TDIBIkyiAQWlZIohOto7cOlf09hDFBghrVIX4QC7KDVh4S9WBDhSShQ5dB0SIy0wgvqzzIciMKC1lu38b27Xs79KkfbSnWc3p5eZ73/wsAUwBK8Y8QAFwA6H8CGAB4QyopBXg16UcAZQUklqJoZcwFvg8FAfgvLZl+7+Tt2pZ0X+VyC1RAInDD81utB8evbVktmQkE9oYDnUoGEyn/TKii5qhDrMgA4NExBQRufHHzot216Yljq2uketBfDikNEHHz664bIi960sMxNfs+Efm2XdHJbGE/WGZA0vCGAz7Ki/vaSJRKG7dB7HaEFp/F2jY377jMybxfe/gZ+lzysa3WfWqiuzv9O4DbfQALC0lvOOCjHHrTwzFkZxMzVK7ucR6vsit7nVE9rlVmx74KPZ4KTsud59EkdQBEAD4BqG5623UBi9m+zOgX6HM/x4yTZWd5NHVOdZb02o64jfxkQuhx7cF0OOgDwTBnxwTgzeGn1wfsNme/FpxHLrrU/+7lrnaQNADA09LWoZLtHpNxdyo0dMky9JXbeVU3dOVqfXtnzlN34o5lhbRM3td6pqHoWk1EADg8h07X/Ck0ISx20fuIAChZK8NaUAEo5kNlzL/YCJgA/ADw3SJe7zPZwlv6BXGetJAsjgC/AAAAAElFTkSuQmCC",
    "title": "test",
    "desc": "test"
  },
  {
    "id": 6,
    "url": "https://www.isqqw.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACkklEQVQ4jTWMTWtcZRiG7/t5z3vOzJmZJjNDW0g0CycYLCNFEUxixWIFu3GhXQa6EEsXUvsDuvcXuCiCmyx04RdoV4KCsRQqRog60hprbbRDO6bJTDJzcj7e8z4uotf6ui62LvUAABRRKEB4j0NUlYSCAgjpVRUIDiVAD3KvSiiqERX/xaoUMnU+K3zFSmQRHC6F6M5U5lrBpNC1W4m1pIJQElnpTy/EZ7uNaxv713+fBCBAvHvu2JkT9c0H2avdI5c/6n9wfVgL6ZXGIDvwC8ejpU78w59J6SFJ5pc71Yun21a4tVM8mriVxel2TZyHEKPEt+pmkvteP+31cyMMylIfa1mA9UjqkazdHveHrijVEGmh55en3zw1PUz83e28HpKARFbW76W7k6LdsCtLrXPPNRXYT3WS+9dONi682LzyycMPb45eWqgtduLMqUSWt/rZxdX+zT+SO4P0va+3r3w+UGgcysri1NW1nW9+HXdnwxMzVRKqGqhHNeRnP+59sbEfBWzF5vKZ1pcb4yeP28zp/NHwqbnKXuq9KkACAQUHhe/ORm+darYbZmdcRlbeeLbx/BPx93eT15+ZuvrtbiAiJKAgJSt0Zsq+f372SCzf/ZYERsKA80fD1RvDF+Zrs02bOSUU/yOp8++80rq3nW89ctd+Gn+6PjrWMB+vj77qjU8+XsmcF0AV3isAUKUemc1BvrXr3n65HVtZ6sRnn55a7tRCQyOohgQQGIgwEKpCAKzeGM617Z1BnuT+793i9oP0r53CQ3+5n/18P1PVwZ7bfJj9s+8MyealXkBUQim9ps4bshoyLdSVWrECIC00EFYs00KLUgMATrF34EkI6byOEhWCZJKpEgZalEhLb0BS/wXpNUuQXGLlhQAAAABJRU5ErkJggg==",
    "title": "ECharts图表集",
    "desc": "首页 - ECharts图表集,ECharts demo集,echarts gallery社区,Make A Pie,分享你的可视化作品isqqw.com"
  },
  {
    "id": 7,
    "url": "http://datav.jiaminghi.com",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADKElEQVQ4jW2TS2yUZRSG3/N939+5l5Z2SqEIsUiNhliDtiVEI0VkARFiE4mJCxaGsDBqdMXOrgzEBLlYsK4wpjEOltCQNJAIytVWQKNVqKmESAOtLZ3OPzOdmf//LscFBBB4tifvm5OT82BpcOQZ3OXJ7DcvN88cubrk1rHhRbdOr8d9CMwCj0GokhlaMjn4Zf2171uEl5sVisZlMtGuCCcax84M1I9e6gTAIHIAE7r/XyQ4MNXC87ZFoIb8Gx1df//U8pak3BpnwmGVTm+SJE7V/fr7wLzLo2sBYnSTA98voubJPmtLMWvUAs+KegQTZjzI135SKt/+tumFiVeNX7vTRRuXmX/LMGH0mDbx3ZXO9I/3NgAILJWyheJ+M+P/TKnUE6o2ejCqFp27eXZ9zJ+uW+uy2V3MnCNPvS5seCpy3D+Ko6XVAJMQAo6kJIB7b7e2d7hS6QMu5v+hRPJZLxl8WLnSrGdWPr9Dl20ndHgDRhsibPZisfPoD74Q7JhICGbPJlPDwy25bW8fLEzGVzhnN+oN0ZXYThN1f1zdWpVUn7M1acQSHpswQGVuL7Teo0AEFoKU9Wc90fBR+vDh12xh4t1sa+tg49iFV1gkPzUF3YZIDRASUDbfBaHegTfS1+7eAAxmVIQSIFukeKyZIHcjk5HE3EXViTYwwEF4GrCrS+sWvhmtib9UNTD+HMAkCAARIcIeCyKBsOzALo8tWyw8yaiE1+F0V67tqTWWIzXxH24OyXnzD5FwSwFiwcxgZouqAIADMQtiJ9B7yXPk7y1eH+kI9cLp1IXxk1LRoEgkO5CbKjg2kwCgWEpFkSjCqTxAYAgCBIXY/qIuD40tUDF8Bgo3c1UKLpvLA6ZPh7ZHb1r2JwAoknIDtP2YY0rQHAhOMxndNP/iL/2gsAvVabjpbIHL9ms2qqe4bvGVB1+ZAAD79kXwXqNpGFl8ANH4O86vSEo3wU5l59jJrzQiPcVVy+8E70jFIGIAUOBuAWQ16H3HI+eETMSlK5lp9mf7tKDeQvuK0YeC7lEnOSMBoGHk/IGGvy731/928el7s0xGgpkepzIA/AckUovjw8ihVQAAAABJRU5ErkJggg==",
    "title": "DataV",
    "desc": "DataV"
  },
  {
    "id": 8,
    "url": "https://antv.antgroup.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACj0lEQVQ4ja2QSWhVdxTGf+f+7715L3m+5BGrNInoQhetY3BC7KqUlIoLF0asuBK7qLRRW41ToiFGHKpIBwIVu6mgi5SCiFPRlQgBURQJLdRNUZ9Tpmde3nCH/+kiBjQquPDbnu98kxz9UienPqQ+KhPd+xPr++BPAlJQmUYTtZiEkN10WoZGzzTWVepIBovixC6u/Of6Sb1hCzIle52EE+GYFBgXPBeMgUoDRZc7Q8cXrEoO9d8i4Wa0FEdinABr77lRmZxnmRGX6I0ibnpKMrJYj9ggFmsxCWNu1/gP+yk4v1IK0xKzlIQspGT75YeVusxPcC2Cq9//IZ/zDtC96V5cZzbF4kIB6GrSE5kkX+WKbNz9l/zW8XGfv2vz6hXGONWIVZTA9P19tudBc9A87dwGpjoneGo75Vhpn4BK1zLqxOeuhYIpPpw/c/rW4dWf9F6QKmkiBgLbx4BdIh3ZgrYwyzrOWiewx+lmFFAHYM8ibT26XLV9cXgQIL+jYa7uy+S1M6NhW+1nAO2LgmPbG/Xs+A+AA2JBxcvyy2COf6TstuyfM/JR6vCDuzYfnoqHg8te18CVznnBUi/0vvNjbbjwRYunqLwQAEA6slII8ux0Aipz5aougMF/61sf3c+sU5CRonsoKEE5J9+suPhzWUAmbusAbGnQS7unq26pDz8dv2yr1zXtM1S3NujvL7jyUoUJyLOzXCS0gXtEQTZ98DQVRRweLZCL+2mbSJ8QQx0Q+3Vaf6o2fPs8Zr1AbdrwY87S1p2TA+OctwiMxdsIUyqS3FG0QlRchcfPSjT2wCiIvsx+vQLISeRJUOagG0iNhKTikLYeJP8mwzckGEvRDF41nAeenUTWjQ33qvt7wf9QWRoCbNzkNQAAAABJRU5ErkJggg==",
    "title": "AntV",
    "desc": "AntV | 蚂蚁数据可视化"
  },
  {
    "id": 9,
    "url": "https://www.ucharts.cn/v2/#/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACgklEQVQ4jZWSS0hUcRTGv///fx9zZ3LGcZA0ItNQe9EmXFpDDwUxiEJJKIoWBS2qRbRodamoRVAQiNgiISjqTgsjKipMxE3E9H6KDwIrR/M54zzuvXPvaTEhPqaib3n4+M53Dj+GxTIMgakKjpEEQQ87AKMlnvwi9n/znCQAgE4cOnMBoOzOcAPjvMZxnLG0Pds5foCN/C1gLn3Vzd4gk1a3kpBbbEmFhwNOKjHkZM2t3/dXfss1WXoOh0EKrlO9Ja97A83XEoCV3e43rUx8yhLasgrBRAd04miK8HwNRHhfuHRX6P5Jh6TUcDykKQoVxk2bpR3OmZ3Jcl+g0lcwMpo4V/sChiEQiSxowQhgeIo6hNDRla1/sKfv9paAJ1XFbMshMMYkmRi58XQ6UzN2qHIQ7VEZVZsJPXChM5fpBK4zwuT7wiNB30xb29ejl8/ELh0MyVNFlk0EEAnVK1wrE7WE0hBrLv05t749KjMAIAOCNcNJffH2ajy1fvcn49pza8cpL02zrMMZA4irmnDNdJ/Es/cyrAApk8dCfn4395gmEABwy7mIoFbUuaa5VrMnbtlasVAl4py7nJkJKH5/dcJTdlrDTOOF8vPKQFdobAEkFIVse9WoXEybkuO+G+WvPlsmL2hU3GSxy9XkrOvvObb86ocrJSc24gfOsjq8nAvQdXBdh2v3S3VMiEdCcTmm7e7HyfrXz2bCxSXy6OTxFa1BYdt7LUk5rK41I7QYUqIcWOY70ZQdVGM04SGaANEQiPpB7oAyMP0xsO23ly8gcX4IYyB6i5W2Ku90iW/gQpJsEk981fGH8z1/5Jt05KVu/uZ/igisuxsSEQQRBBkQ+Xy/ALFPIEpY0WcvAAAAAElFTkSuQmCC",
    "title": "uCharts官网",
    "desc": "uCharts官网 - 秋云uCharts跨平台图表库"
  },
  {
    "id": 10,
    "url": "https://github.com/xiaopujun/light-chaser",
    "icon": "",
    "title": "light-chaser",
    "desc": "light-chaser"
  }
])
// 框架 frame
const frameList = ref([
  {
    "id": 1,
    "url": "https://astro.build/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABzElEQVQ4jY2SPWhUURCFz7wfw+4msmrUEBACYmehG+wiBNLHn8aggrG2MJ1YCIutIJZiZQobtRAMiNqIYGxEsAmCgugqSlSMm0jczXv7WWR2uZsNwYHL3Hdn5pwz88YUGBCZWQuYkHReUstDsaQnZjar/zHgOb22CAxsVWTuDwJNYM19E2g4yJTnxO26KMAw96ckpX5P/USS8JiC1npUpMAC0PJzD7ju7DmwAuzbrDByP+HJa+4ngWEvzvzt4sY2QoBbzpwBv4BBf38dqJpvz2ujiu3AFx9aC7gfxK46ewP4CxxqE0eBlJOShn1opjx/GODPCUnSNkl9kqY7gwcMiIFZ4EEOF76zPF6jVpBk6G5cVTWqUz+akZ31Nh8D/aH8BBhqf/+YfnakNk9BaF0do+nS2NKOIL8MlMJ/37E3fCvtOfN0If7ZKuXFwgutpO/SgcGKrFDZNbZ/RDPlupl19iAJUE1mMt1c/fxHL6OkdDj7HY2XV4uT/Y1Mi7uTR5oZXZYZIWFnE80Mk5BVW8mB+PK1ub2VZv72RpS+5+vQxzvJib4pM8tN6gLY0j4cO33p0/Fzr0TXynfZpoGqvxdHirebO7lSXaftXR5J/wDGk23fZgaWpAAAAABJRU5ErkJggg==",
    "title": "Astro",
    "desc": "Astro"
  },
  {
    "id": 2,
    "url": "https://cn.vuejs.org/guide/introduction.html",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACfklEQVQ4jaWSTUiVURCG3znnfD/Xn1RuurBokwsVJEoIMn9woSSi1CaoRbRy565FgV7OhRDdla2DXAS1iwJdmiKJgYgUtdDARbZRSqV7v3u/75wzLa6aWbjpXc7MMzPMvMBRaS2aWfutPOThmFp5yGtm7UNrcTRO3dPZSeGrBia20dx2rfmwE8qKQBSlGVt59vQFALTeuXvbc8F9mys61VJdSHWd3iIm6WKzrpjonQj8YSZG2FKNnys74O0EKuUe1+uh1wBAq/EjjuJaeEDYUg0Z+AATbGJvyY3nsx/P3exolFI2czklMA7xlz2jvPBUeY6p8jt3qqK8ZqIoDtrTUE2VRjhBSb7w8m1fJqsAwEnK2GIySITQv1SD+NOeZ7YiBssHBMDkLIu60PMv1jDFrCwnBScpAwACGmK+d3TNODMpQl9QmXRBWxoMBmJHHDsCGGFbGlQmnQh9YZyZnO8dXYOGENBwYFBOReMmX9gQTgq/qcqp8xWAYWbDLBsq4DVVOeGkMPnCRk5F42AQNFzpJVlNyz0Tu85yBooECAja02AJIkUUXE0DBECRcJYzyz0Tu8hqAkrhQw8AQPdlmpOpoN2RNflXmxIElA2esQJS2ai4MPueu/brXekGvzsAWruE6R5ba5CAUp11nOqsYxgQW2sSpnslUB9S4gjvoLVY6M8s2cRMycCTVC4dlUknA0/axEwt9GeWoHXpbgdOPOZYAoArbx7WpwKsEqgGABj8IyriwuLAyLf9Ov57g4OEBi0OjGxa68bIl4J8Kax1Y4sDI5vQoKPwvzY4aEMNM8P+WVH7GQz6yluN631PYtCf8EkiAGifyd7omNbXTxz2v/oFIW4et9u/Qy8AAAAASUVORK5CYII=",
    "title": "Vue.js",
    "desc": "Vue.js"
  },
  {
    "id": 3,
    "url": "https://nuxt.com.cn/docs/getting-started/introduction",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACSUlEQVQ4jYWTy0uUYRTGf+f9vrmhM45WoAOihCE4NkWaC8GUNkG0lTa1beMmIoYg1HdGqVkEbfwbWtgyWgRdQBEiMMIyCLzE0AUxnYu38ZuZ722hTZlTPqvDuT7ncB6oBqMVRquqsSNhkKr2P2Af8giGb8kuiviRkZkDrABEuwfT/5wmwOJoMz7vLEgQx+nhpJ7bj5lqDH7vmUAAg1HjeO3jWMqHqFSFVXosyXLy5mHCe9MVgsuC7uVY7QwbO49wydBYN8T37ABKgpwIPiFXgLxzgfaR6V81Utnv8bzQE5siFOhiLRtlp7ROU8MS284KYKGkHpEAZfcdS8/7GRhwEe2qvU7a5Wz0Oo11vaxvTnBqfJFYKkO+MIbHaqfW38Zu8RZO6T6RcC/NF68h2sWgBIPw/k6YhtAHjBHyPzrpqMuCNqSTHfh9b9lx5mgdPs+yDuPxfsRgyOQ7OZ3KKgRDjT9OYyjCblETfbgO2AiGskngs72UinEmBy1adQ6nOEpTKEKNP45ghAXdSTDwhoIzTcvwpcp5P+nLREJPWclP0qavHjh9evwZPk8fhXK3sJh8SY2vn83dBxh3FgsouS3U+u+iLIO7fYbVrTXqw1colhUuJcR0EwzcZsuZsrGkC+Mq6gNxvDYYAyKwUfhCoXCD1kSar/cmiISHyO2ApcApgVMGS87ZWOU+HBVja6sEYrCMYHtyZDZeE0tleKVtXPcFn1dnKLP/xkbweWz8Mvd/peijFSlorRid/0t1UQPaVP5/ctBisEp1Imp+Akra5ZKG/7sDAAAAAElFTkSuQmCC",
    "title": "Nuxt",
    "desc": "快速入门 Nux"
  },
  {
    "id": 4,
    "url": "https://nuxt.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACSUlEQVQ4jYWTy0uUYRTGf+f9vrmhM45WoAOihCE4NkWaC8GUNkG0lTa1beMmIoYg1HdGqVkEbfwbWtgyWgRdQBEiMMIyCLzE0AUxnYu38ZuZ722hTZlTPqvDuT7ncB6oBqMVRquqsSNhkKr2P2Af8giGb8kuiviRkZkDrABEuwfT/5wmwOJoMz7vLEgQx+nhpJ7bj5lqDH7vmUAAg1HjeO3jWMqHqFSFVXosyXLy5mHCe9MVgsuC7uVY7QwbO49wydBYN8T37ABKgpwIPiFXgLxzgfaR6V81Utnv8bzQE5siFOhiLRtlp7ROU8MS284KYKGkHpEAZfcdS8/7GRhwEe2qvU7a5Wz0Oo11vaxvTnBqfJFYKkO+MIbHaqfW38Zu8RZO6T6RcC/NF68h2sWgBIPw/k6YhtAHjBHyPzrpqMuCNqSTHfh9b9lx5mgdPs+yDuPxfsRgyOQ7OZ3KKgRDjT9OYyjCblETfbgO2AiGskngs72UinEmBy1adQ6nOEpTKEKNP45ghAXdSTDwhoIzTcvwpcp5P+nLREJPWclP0qavHjh9evwZPk8fhXK3sJh8SY2vn83dBxh3FgsouS3U+u+iLIO7fYbVrTXqw1colhUuJcR0EwzcZsuZsrGkC+Mq6gNxvDYYAyKwUfhCoXCD1kSar/cmiISHyO2ApcApgVMGS87ZWOU+HBVja6sEYrCMYHtyZDZeE0tleKVtXPcFn1dnKLP/xkbweWz8Mvd/peijFSlorRid/0t1UQPaVP5/ctBisEp1Imp+Akra5ZKG/7sDAAAAAElFTkSuQmCC",
    "title": "Nuxt",
    "desc": "Nuxt: The Intuitive Vue Framework · Nuxt"
  },
  {
    "id": 5,
    "url": "https://www.electronjs.org/zh/docs/latest",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACcklEQVQ4jZWST0jUcRDF35vvalmSkRBkh6C8dKpOFkEQtrsSYkEIhTeLICLJXbPU9U+6GpG7oUaHiApBCIMgurj+iaBOHqJDEERlEAiSBGJWS7/vTAfdPaQIzfnNZ97MG2Kdinane43aQJPBTEesbS2NrAcwagPpir2gCbW17r8BgBuCx5J6vxDdd2hNB8zbvZ46as7fpy+YVWdvJxKxSwBY2X3roKNrUFgNINccbI+qPZ/ojE/lAZHuVANFBhQaN9M3hGwRw1ZPa4XaNjh5LmZ7jTJG8CfMtwHu1Hh74wsBAAqOe4/qiUQ8HfjgC4FmgG2k6518N71jMhE/C+NjGirGE439oFwmMQUAIQAwzxJCf4d70hEqRgE8+PRtpuXj0FA2t6IqpgnEAABeZxUynQcomKTgjEFr4XhuIhF/srJaPYEg0xEfFqdzULd9+XK8CHI4n8KiLbwy9TWibiTXvDyIXUa5AQD0boGORZFkfx1g8v3r+3t5ByWupBmwz6o4He1Jf8q0x1Irn3DMewMAZJHdEvIF2cnOphEAI7khoWh3uterv0qRZ2bBea8YiyZvVwRLvy5MdcU/5IQFsnEnqXOr/iDS079IumJ4LGU6G4srW/pKZVPhXVMXdqJ3st4GX3Y1zYeTqRiMhz2CZmFoDADUgiqhyaCZ/wHaAADYhqJdVDwSp9Vmtr+QmI30pF6boU6IEoEbdWC5A8sLEDrJfy1VtvSVhjYXzZsFu8fbr8yEu26WIVRYKcAR8/BGzUJ4woA/akHVKkAuPjXpV+cPUK3M0T0F2TSeaBz5V7smAADCyVSM3lrpXCnM6jPtsYdr6f4CtRkbGiZxXgsAAAAASUVORK5CYII=",
    "title": "Electron",
    "desc": "Electron"
  },
  {
    "id": 6,
    "url": "https://tauri.app/zh-cn",
    "icon": "",
    "title": "Tauri",
    "desc": "Build smaller, faster, and more secure desktop applications with a web frontend | Tauri Apps"
  },
  {
    "id": 7,
    "url": "https://cn-evite.netlify.app/guide/dev",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACU0lEQVQ4jbWTy0tVURTGf2ufc6/PsgeZlkUEQRgU0UAo8h8Ih9cekFbIrUElUdxACE9YYVSDCMUieoFFGkEOimZCiIUV1KDCECrDwlAo7tH7Ons1uPeqkbPoG32bxfdj7b32gn+U5I2CCKj2sp0CGkiSmakLgpJBOSX1TM4FuDOuB0M9AZbNLKSJeC6uQCkwTj9EfnreBhdareeJAjoLeIfm3DRxMkwToBgEJY1iicmu3gB6AS/ft8wCqv9o1815pYiw+jw1uxg6cvFzdSoVrrHYiSQ6cKdFJkyeRCTXgeRA2ZNDmowIpwH8oHjUYCcckbpikcHoua+NLp5n8MQisHavrsaKBSxCQAiXFG9IMql32Uhy2bDspw/oi7aP7TEiZwXgwPkvKwqtdj0fWX3hVa2sp0Ku8UtBsQgJDYkbJJ2PbiJTIw340bOfKo0TeqKWR2Zf2+i6QgpeGKOjr6/Ls1RBOK4+w9Y6YwGOoBQJGnYnMzFpwD98aXxnKFzSryr9V1tWtsqh9m+DRhjoPFl5Ind1B7Dc4AgVXCYJP/w1Q8c/D99eXOg3KogN0q0dsfLH2SmonVJL1cH273WkzYejJGxcFi2vnbq5qWzM17HpNfLe37qsxI3v0CDTeSVWfgsg/3aun5zeXVJYdMwITbiZskDMAldTiZFETdmW0n6pCr3tfm9rm7talkzkJ+55ajxP7F//Ohp9GerwOkpBHe2mWR+geoZV2ZBnIhF15lkHlUjPbEHBAOh9WpL3wm2gpifCfMH5pV4WkL7PNn3IUp2zcP9FvwEjVABAsdcEUAAAAABJRU5ErkJggg==",
    "title": "electron-vite",
    "desc": "electron-vite"
  },
  {
    "id": 8,
    "url": "https://www.svelte.cn/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACf0lEQVQ4jW2TT4iVZRTGf+e733CnGmOKzIhIEl2FdmdohGG88zchyAxLK9rYojZFCIGj1aJp4aZCW9hA1C6ICItGJNRCGyhrBrEgxwgCd7mJMeyS996Z7/21uN5bjr7wwoHD83DOc54HbvKEUqfe3tvno7c86bZVgzKVXetHux8rgFlAAnBrV4Xm0gFqjJLoBhr08DM5e+M0399AIESArqfMA/kkV5b3E9zKI8/KwLhcuhh8+UHw92KNLsbiW852JmkXVtnsCPP2o89sTP54spnU9vf8D3XHb9Ph+KqD64C38JBVLlvN9fDrTZv1Iqn+NJvcvTV56rNUqO59ItnHn+66706AvCNAKdtHEb1MfdJwYlc5rl4xDr2qH09H1JDfZ8le+SOxvJQR5NRT9p94U6O5Ayy4e1NRqC7MJ8dWJx9E33xOj7yX3L8zuYklq+gox4QQojXBwmoJrtJsZAKkQjYMBAcntTISQmRP7YGHp+Xdl6GU/RIkhQyhdduR7KCD6OfTzaQWbeHOHEs+P568MF8Umnx6nW7mjFMtXB6QWkypQg689VLE3Amjfwuc+y6YmQnW3S9d3QEEpTwB3dc7b/td99rHP+7boUfeLxwqJ9eSrJA8PJlcbqSkevSjukOho9mHbeNdI7h7jRX+8rWdrVN982nyxW3JX8+2gLXLhe/saTiEDnPJYTZc5wMhrMYJJ3r0/Fy9vX+hevqLpjvWaz86xqzDbPz/9NH2vyMMsMwpVt3Rw+MvyJq1MncyY/YolFikp3yArxuHAmzb/sYwTTBIk7ep0U/QRdDkdo5TLr8Rxxu/rQzczcOEwWO9/bB0D3n3xZhZvNCOeECxMvr/AkbRg8ne9qIgAAAAAElFTkSuQmCC",
    "title": "Svelte",
    "desc": "Svelte 中文文档 | Svelte 中文网"
  },
  {
    "id": 9,
    "url": "https://react.docschina.org",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC9ElEQVQ4jW2TTWhddRDFf+f/v3nXxCRFkfqJQqFUCEhdiFajaURBqgvT+ITGvKQI1kVsiBi6MS8+Xl5Waf2qmCqpYD6qEnUhogG1RYmk4EIEF4Wi4FdopSqN2nrfvfc/Lp7WKM5qhjkHZubMEf+JqHxkG5ZvyH489wkvP3oOgD0vtUQbW+5A/mw20beyHq/1ReHJ2X1y7mawU8B1ufECgJceA/sGdAVmx5NaaepvjrvAHlvYLKfu5Kezg8lEaSjxjHinGe80k6Q2kkyUhpLzYQBHN2MLmy9MTKXiAOIs22Lyn/Pi0G+Nmh6cvYmkOKIngSn2D/xu5dkvYrItSaXyVWOFYtGzuJhH4692e3OjwPtm3Ia4G+kowpzZ9mAclWkZ2Y5cYX9WHTxGsegFEI/N3wf2ONKVBm8JHkiytIfUf0dyWVbYcGaTnN4x0xGJBwm2CuGZpDb4rm8qLwzj6LWgqol2Ea5GOpRPDn7cdOf9D/vm8zemtYEl37nzDGibmZ0I8s9KGnZdvRudJ/TV19Ld6WT/cRmrkttar/a/0TQ+/4hvaTvkm1unLyrP7alPll6TuEFOP2QTfSv1X9PdntDXUEH5P2pgjdwsRh7kMSj81fSYtJ7jtb03jgp+VF07vwduBZ3yt/e0prXSYXfLvaml9Y/qtdLThfG5hxzWGlDsunrWojiaCtLbAojG5u7x0ihwjREWhXYFQjGt//E1FoWm+OLrnfLXjTAn2IXp29zbgaxSWnIUiz6rlZZysxpwUtKqwYrDHysUWmYKzYUZR/aBYZ8qcBrjZO5tMquUligWfURHh9HR4XymViN8Wa8OTAPTcXl+RNImDJA9Va+WngMolGev9YG2rPGAFlGpBICkMncizjXE3vl2DvavJVm6FEfRhwBJlt0FwL7DbUJbk5C9QrXB+5eZ4rH5J5B1Ik6DuyoP2fONS7thxCrG5UjLSbX/wP+6EaCpPH+Tifbsl0uXObgjAWDve3F0yc+dMtbSif7P1uP/BNwnP3Xw88OYAAAAAElFTkSuQmCC",
    "title": "React",
    "desc": "React"
  },
  {
    "id": 10,
    "url": "https://nextjs.org/showcase",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABcUlEQVQ4jZWTsYrCYBCEv6zBA0FQELlSBBtJY5+UFnYWtpa2voDYiqUo+AIid60vYCU+gliJhcWJXIJNQM6w10TJ5eLhLUyz/87wMzsLP+sFaADvwAH4CnEIe41wJrFegTHgAfoAXjjzmkRe/EGMYxEVSYeqz5JvGIdcGsDn7SGXy6lt21osFu/DIqKWZWmhUIgKfIZc3qLKjuOo67o6m800m80qoOl0WqfTqdbr9fgv3gSwo2aYpsnpdKJardLtdhERVJX9fs/5fI57Z0vcURHheDzS7/dptVo0m02CIGC73eK67i/zzaR9igjr9ZrRaESv12O327HZbJIEEODjUTDm8znL5ZLBYIDv+3ieFx/5EGAV7QRBwOVyAeB6vTIcDvF9n06nQyqVigusiK8xn89rrVZT0zTvblcqFZ1MJuo4TuIanwqSZVnabrejWbgHiWeibBiGlstlLZVKahjG4tE9/HlMIuJlMpnEY7rVv8/5GxU00np4/hILAAAAAElFTkSuQmCC",
    "title": "Next.js",
    "desc": "Showcase | Next.js by Vercel - The React Framework"
  },
  {
    "id": 11,
    "url": "https://vitepress.dev/zh/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACsklEQVQ4jVWTS2xUdRSHv/O/dx4tM8NI2ykpqfYho9KFYHhJ4wY2bNUYcacYVqxcumq70q1xZzBgXEpYkqjBJ0SNURPDO9gpMtVOp6XTTjudmdv7/7G4gulJTs7uO19yfsfYVkrxHvn+5xh7qcizg1nGC8ZYKcv4UC/llCP3201Of3zGLjItx7T5EODAZQ3sL/Lh3h0c7AvZU0qTG+ghM1SEgR2QBUI84PhnlteAi5pCNg0hQK/nlXf3c3qyZ5sNECWDlMA8hhvKMQwyMxOAA1hqUGsvESGvboyPPNryhieNLA0GmAIJK6YZBTKP1ziAOz8wW2+wJZylA+9STha6Ltb6BVv+iK3uqi3MO8xEsZe+Ay8wuA3AJyxvbLBohq7W5b+dh0rlKzT3Fu3qZ1w6v8bXF5CAYo7MkRcZBZhGzgkMrLvWpIKw6pr0wZfGN7+D67ZIschw6xzlvWBsaVcBe2YXIwA33sBcwoXGEve9walRH7w6KBYrZR78PUnQrNNZOsb4IQxiK5XQzhRPA0xMYG5mhgCgu8rcRoRw8M4Jqbdb5sef3qd2/WV68ofpGwEIfSaP5TOJwdQUsbuxLzlUZ4X7y3UMAmWzZm+eEqqVuXvtLMOHCphJKJAC6C8mADOT++JmAliuMvdwEYGzODLtHoPJ19No/TilwyGSDMwMlC8wCkoj7Elsjj6vke+uaFOS4lhxHEs+klavS977pGPF3kt/nFfrbbT7/zMCP99mod3gISAzMEMEojAhkAlvkgfMa+cAqWMlxrYBgE5nhQoA5pF5w2IgxpzMAsyFOMNZf46w2MdT8N8vSEm216t6ACQCkUObjvUarMxDq0anU6MZ1fm3NcvV+i2+fwKYMQxQs8rn185xMm679sY8tzcX+CtapdKpcq/xK/f+hMqn0ASLHms/AlHhRH9/PNKcAAAAAElFTkSuQmCC",
    "title": "VitePress",
    "desc": "VitePress | Vite & Vue Powered Static Site Generator"
  }
])
// 编译 compileList
const compileList = ref([
  {
    "id": 1,
    "url": "https://cn.vitejs.dev/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACzElEQVQ4jYWSW2gcZRTHf+ebyczsbhNDpcTgpdAaRYRAL5RSCGlQCILPeVNBBBGJNwSJLWSqtvrmBUMfFKQIClaUokRT1BSCimK11GKjqMWGlqTJJtvd7Vx2v/mOD4s2PtT+Xs//nPM/F2E9sZq9w5gTI7hYYfKvB/rw7XbIBtnQNWzX+ObgkQ9emkSQGAcgoz9of5Jg54aoIuIA9GlKjA9NI24bznYTGUNYwNL3Y3I3R2dnY//kp5O9LsWX+77WVwLhSa/O6ZJ1v+WXza/39k43Hh3Y9xpGoe0cqBbtrtbhmY+nLlzY3L+xi9ujgkGX8qYfWKaClIdLHruCwuyKylDL70DTohCxxqkR4zVkYWlvRHvzswM35uRrIXrFrUliDptjw7IQprwQpmCqLpNLtCtJ1dHOPNcqRNo55B590Rl57J4Bu7X3vdzUIWzlh8bflXMGVKoLvGVWOVNRE/opfndRF9EapmhC26K5oxScJ6v3yPlfxgKT8HtPszoFKoYY+ewJyf2UiTBVCVIo2wbNej/V1S1gE9HcCTbh1I+PY1crUnbp/rGjt6YxiHTupwbETbzsPil7cn+U1mzRjLyhrW+w5659QtGtzcZtxecffetfqZXmHjrGMIAgata/QZjLhN/QzDV6PUkiubnynWjmQVGXsyfHJVsu0WNWnxNED4AAeJ3UAxqjJj4hS6Pb4003CLvDPLeNpS0S0GKDf7H4efaIbxPz/th0+XVFZQRRgH8dxIgDFXuZg1rTxSgPzOK53RJoTf/46RlTW/TtLXppf8f6Vf4zQgzy/DuyHCX6YjkTc1O4ZoOi6VZOP2UCy6tDX/b9GXf2pdco0HFRsfNvpyuc3ejXvOX5B83yxa6VTaVTh0Clo/kfOh3gwxEdnRkpdG6P6vEd+sj62HX5Rziz001/saOYj5n1FZXrJl6lI/5qMLvz+LbWToBrFfgbUaFXw6AWkg0AAAAASUVORK5CYII=",
    "title": "Vite中文网",
    "desc": "Vite中文网"
  },
  {
    "id": 2,
    "url": "https://www.babeljs.cn/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACoUlEQVQ4jYVTXUiTYRg977f5k85qpkMvLERB2RpiLbV0G0YQURQYUhd1k9B1EV1EF21lBsUojMiQEhHSMkmkBBNxRk6blmZOSaX9+Tt10NycuW/f04WbOKZ0Lt+H8zzPOed5Gf4DssglSJLmIshSECOe/zZvtKhUCITrbEeiTXM8wOOCSATNeoByGQMEARgeWzGLY/jrBWdGTQAgjiISGJyaWq9PqJCkxmJidAV1zfOv+KAwk5EWl3juRMoVcWx8Y0X57vyXzR53BHllUp063HGopt6Qa3tWmdVEc6XBan12W7heLkds0KEdmTAW8hkyZEVtYKhxnLM7/At1za48smv0C3N/udetrucAMNmen5qtTGrAHrGyrXOx2+mCgyjaAg4AyHokbW1C7a0z5HwGwPkn1VrequldGi8h/bUDRgCZYQ+5CP1vwQAw31rspbh4LjFfLgmQTWOK3ys2ipJjjk2Ne3/feWI/TwRbKACKWmF28HBCijTBHJMgVizMrmHwp9dvdfr7VEqJrKhAKv/S776pLvvxmHRgTAdh0wMicIxBSJclnA0EmOLeI2t7V7+7qcfk6QHgcA8XP0A8O9je5c4AQNueAOnAkUM70NGgXAIg3XyfLrlNrlKqN+RMb9UfQdwwT31y9VcJXS6T3QCAZUuxghzalqBTS9V3sy0A8qOmYmMfBgC8VWN8X6uwVd3aLyeb+r7NVOjrfpNHVy+mvwCwL2oyAEY6cEwHgWzq0xBxH3rNfxb4ILF1nmTmIc9YS/ti5ZDF1xjyCACEiAYAQM6ju0bHAz1zi+uqgSHP9ym7v++Tabl1Zob/CsAbIlPIvAiIAeDpwz5hVZJpHxzxdL77uFwFwBdKhun1G+lsq30ryk4lFwFIpJCs0FXu+FvD+Ad5Dy23GyEUwAAAAABJRU5ErkJggg==",
    "title": "Babel中文网",
    "desc": "Babel 中文文档 | Babel中文网 · Babel 中文文档 | Babel中文网"
  },
  {
    "id": 3,
    "url": "https://www.webpackjs.com",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACkklEQVQ4jYWTMW9bZRiFn/fzdRw7je3EbhNqoEWQCqWhJVBUBAIhIUCCAcQACwMDEhNi79gZWED8ALYOMLCgqgxkQC2IpRSZtAQIAeISx7Hd3MS51/f7DkODFEIq3vmcZzjnPXDASYokPZMFXfReFyQ9LMkO0u43mqSZ1Ou9633f+qbtdaXtw8pm+NlL5yQ19ntsj3kqwBurW3r7h1544MatYI2SI87EIBOzVRdOVt3VWsE+Aj4zsx6ASSoBL6/v6N1mP5z5sa9cPBSH8sZ9xcBOgJUdR5KJWsF4aMKlM2VbKOftA+BLk/T0Vsan3677+rVuwJlxOB9Yu7nBpastxosRz54+ymilzFoKow4eq+c4NeGaeceLETDyx1YodBIxX8sxiAd8svALXy91SbIAwHfLPV46NcWrjx8jzUX8GgcaJRudLloUAWSC32Jh8vz1+waTpYij1QLLnQE5ZxyvlXASy6tdwmSdzaHQbnTRP0maQerFpcUOrV7CE/dXmb+nzEjOMRh6LjbXSTEemaxjewqN9ldiwHJnwJ+9HV5/dJrVfsJXNzYIArP/vkIEIEC7gkLkECILcHMzoR2nCDBEMbLdyvcBDDg8akyPGa+cvZfiSI6F6x2k2+L6WJ7n5o7w1NxdFEpGa/BvwPDuMRt2U8e1biCLDvH8kyc4M9Ml3R6QZGLqSIWoPM5SAhWJ+ZpjIm8p4E3SGPBaO9E7zV44vdiX2xyKUmTMVYw4g6VYDL2YLBhzVTd8sOIuj+d5H/hi7ys3ArzZ2tZb33fD8Z9uBRql24DtTJysOs1WXbNesI+BC2bWudOYZlOvDxf7vn2l7XV5zWslDitDr/OSjv3vIndBeUkvZEELIehzSWcluYO0fwO02GAhQEQDaQAAAABJRU5ErkJggg==",
    "title": "webpack中文网",
    "desc": "webpack | webpack 中文文档 | webpack中文网"
  },
  {
    "id": 4,
    "url": "https://www.gulpjs.com.cn",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACe0lEQVQ4jVWTzW4URxSFv1PT055W25EGsPEYS47BgITYwgMYMV5G2aKQRCjkDSKxQwhYZZEswjMg2PECCSxIBBuvnDVJMJaDgv/H0zPddbLoGWxKKqlK955zb9U9R2srK/dk/VDgCWwxWgZJwjaSwPY4huQJVFj+UavXu6WgYYiAjiVpDLaN4IgALAiGKrEdLFkgJBQCBhEj48KS+MhUN6IIxg4JEgIcglwUropCQbKyTAqhLmfjorDStOak5kYiAHIIir2em52Olh7cd+f72xql1K+Kkda5c5+C644VgmQPBk7abZ29e9cfnj9XHAyZmJ0llkOqwx7ZhQt0vv2Gst+XbI8+2NgODkHV/oHmbn/H9h+/a+vX39h9/Yr+u3c08pxYlrSXl9l68YJqbw/lk3KMVGUlg5JYFKRn5sgvXeLNVzc5feMGrfl5BpubDD/8Rzo7C4JifYOLj36hMTXF3z/9zGB9HWIkxH6fbGmJ4p+3ZOfPc7LbpdzZpnmiTX75MunMaaq9fWa+/IKQZVT7+3S+vknz1EnicEhQmjLc2CA9M8fCnTsM3v9LubvLZ1ev0JqfJ1tcpH1tmeb0DP03f9GcnmbzyVP6b9cJrRZa7a5ElyVhckrZ4oJbC5/r/bNnNE+0icOS2OvRuXWLqtdj8/Fjkjz3cGtLSZ4bm8S2SBKqnW0frB3oYO1PK0lU7e5BCMSiQEmDnZcvYTBwbDSUTE7aMQpAq9e7sdamjkYEHt2xhKsK2SZJRuL0R5UkY4hGZgmSDTqSjFEIo8l7LK36YBMkxVCbyGPZYltjsFTv424EjyhjSIMepgqHSBxf485q//iTGBKpwmEa9PB/e/pT5seZ+jwAAAAASUVORK5CYII=",
    "title": "gulp.js中文网",
    "desc": "gulp.js - 基于流(stream)的自动化构建工具 | gulp.js中文网"
  }
])
// 模版引擎 templateList
const templateList = ref([
  {
    "id": 1,
    "url": "https://ejs.bootcss.com/",
    "icon": "",
    "title": "EJS",
    "desc": "EJS -- 嵌入式 JavaScript 模板引擎 | EJS 中文文档"
  },
  {
    "id": 2,
    "url": "http://aui.github.io/art-template/zh-cn/docs/installation.html",
    "icon": "",
    "title": "art-template",
    "desc": "art-template"
  }
])
// 包管理工具 packageList
const packageList = ref([
  {
    "id": 1,
    "url": "https://www.pnpm.cn/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACcElEQVQ4jV2RO2+dVRBF18yc810/gGAcB0x4NPQUNBQULpDcpEEolPRQIQp+CgU/ARoKCkSFQIJQWFh0CVLSICFkQmLix73fOWc2RW4QYkur29ozs8dWX/CDBS8p6SWobXBP4ptpgw/7zAUQZoQGn+G8E8ZeT3oNau/cKjJemYLrXeAVLOmIXd9g32bkhkVAG+wKXo3CbrbHXpLrBWg5yBTJwBENo9NJoI2kACajSzQNUmIwCEFzoHrgZhQCx6hdTFRzzBalWEQ1l5jM2LQJr4XKAjfYKAYPM3laIkkcON0O7jPrpBqXJIEoi8LJMrmtxm4bjGlFAPfKafLmXsUmhwdLfGdJf/+rt9+apo0rrc3DkLcMe/3FP3755ODnRU+2EAm4GXfLtfc441/JwHTjxvbBlm9/vFwuCTfmLJyv/toEPihPGXTBAvSAY+c/OjiwAHDXhcbcULtUznPm3MI4A/4c52rtkiUXNMFDB+wJjx69YYBJMolYU5QqkjnCh6ykKJkUQRRATzY4OjpqAGbmZuZANTMzd9wygO1pktEpLGCRlHJ4ePhaKaWuMyIzL3vvtyR9KulsZIaG/P7F9O3x79dOz2ddAevuqiS/lmmavnb3lzMzI8LHGHeBz2ut77bWOlhZVLfbJ7t/f/TlCzfD7arQcPMYOX4qwLRG6y4m4Bl3f359DmZG8fbszmbuR4mdzCQiaK3vFaADw8zWv7UuqUsaQJNUHpdqLfGlBkOyIYiUrQqw5e6RmeHuZOYWMLl7mFmYGe6OmU3/9/beN4uk78cY++uJkZm/AXd67z9KWmVmSHLgjqTvxhjPSepAAY7/AdplZsE5nI+QAAAAAElFTkSuQmCC",
    "title": "pnpm",
    "desc": "pnpm - 速度快、节省磁盘空间的软件包管理器 | pnpm中文文档 | pnpm中文网"
  },
  {
    "id": 2,
    "url": "https://www.npmjs.com/package",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABJElEQVQ4jYWSPW4CQQyFP3uGREqEFImk5Ax0tBxgLwGn4CSchxKJvQF1qtAFIcLP2ilmmd1NAnHnN7af/eZJCQ4ChMCdqKpUFgEBB6uqO/WahqYGg4e3t+fx2M0AEamr3B0AUd2v16ftVoFSdQWbonB3czfvREY2RbGCUjWmgW51JYBI5hEwM0TcLKGRmrYTdji8z+fn3e5lMhlMp82De8zz6tXNRNXP54/F4stdjsfX2QyQK7n+HH7tj4NBDCH0++09k1w3haeqMGtE+6fhRtRHZx1xz0nGmy9xV7qMzS1/oxJTr6iKCFftpddzkQYHUU1EUv62hqqfTp/LpV0uj8Ph02iE2b4skzWkBJL5uuSaTdlKa/Ml34a2vd0xcxCRoErL3t85nLmIk9I1cQAAAABJRU5ErkJggg==",
    "title": "npm",
    "desc": "npm"
  }
])
// css cssList
const cssList = ref([
  {
    "id": 1,
    "url": "https://www.sasscss.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACPElEQVQ4jVWSv09TURTHz7n3vnf7nhRKWsQWmiAmBH8thkEHNWrCiJP+AZqYsOvu7sRoooMLi5vGRaMx/ogLDoJAUCNNEUhbaH2vr7xf997jQIVy1u/ne74nOV9cuPcY/g8RISIgApFJtUkVEDFLMFscqOIIzRAA9F4MiJlizi3nmbTDreZepY6c76uih2YmUaR0bmp8+MZ5WcylzUAFcenEBW95ozr/CZDjvmF/t44SO589efd6Znig8WG18ux92uoYZax+Z+L+jFvOdyoNLi0BBIhoYuUUBycezHTW68sPnyfNQDg2WhxSTdqYVKkgQo4AwACJiECw8dnpYG1r7dELHcZcCpPq1A9FX+bU7LS/WI1qHrMEEAhANHGanRxxSoM/517xjOWO5mVx0ESJM5IfOFf2Vza2Xn7ljk0EiCCAAAWLa3/TduiWC+FmK95pi6wjC9lkt73+5G1U87grEYCIAFEAERM83g0qT9+N3r5EmpoLv5KdtlGaS4s7tjiWAaLuiwAEIJIh4dreUjWq++VbF52RXNTwhSP9lT+pF2IPDQDs4HHIGGkT7waFK2eFI02ihq6eEX2StDmguwZE1FHqjg2N3bm283HV+14NN5u119+C3zVZ6DdaQ890E0jp0s0pf6kq+jJuOR9ut+TxgbjhR9stZnGgQ0O3GshZe227cPl0drK0Mf+ZYsVskdQ84AyR9SZ0DUxa9TeLzS8/VCciZZgtiAgFP6zwkZOIEBE5U0EEiEyKXqiXBoB/VNIoRgX/zjcAAAAASUVORK5CYII=",
    "title": "Sass",
    "desc": "Sass: Sass 是世界上最成熟、稳定、强大的专业级 CSS 扩展语言。Sass 是 Syntactically Awesome Style Sheets 的缩写。 | Sass 中文网"
  },
  {
    "id": 2,
    "url": "https://unocss.dev/interactive/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACU0lEQVQ4jY2SMWhUQRRF73szs7t/TQIJKEiEFGlCOiXYriBYRW3cxiZgY2pTmWaNyAcbtbOysLZMAgoKaSySfDY2SaGEhdilSAhinL8z857F/gVBYnwwTDFw5s49Qzh/CIAWRXHfOXcnhDBqjNnKsuzFzMzMD/oPAIqieJxlWa6qEBE0m00cHx9/JKJ7ZwJUlYhIt7e3rzJzl5klpZRUlYkojY2N1U5OTnL+x8XDsxsjIyMaQhAAloiMqhrvvQC4dSZgZWVlmM4REZhZACiAQbRBQmfPAszOzmr1FAEQq4WqVKkSJgvAtNvtvwB7e3sOgDBzY3x83Kmqs9aCiJBSQr1ex+Hh4cS5FoqiuNZoNO6WZVnW6/VfzKwxxhqAC977np2fn7+tqpcBRGYmEVEAqMr6NDc31wXQBYDFxcXrxpjRjY2Nnd3d3SMAsABe12q1SRFBVdagOedQluUjAC/zPG9Za98S0RQALCwspBBCZ3l5OWcApymlJCIhDSaKSJlSSiGE09XV1WZK6R0RTZVlGfv9fowxGufcszzP27ZSwqo6dD9Uxd77n71e72az2bzovQ8ADAASkQiAVfWhVdXEzDpUpKpQVQKAGGMZY7xERFL1Um3EIgIAEwxgyxjDAFLlV4iIY4wUQviiqt1+v89/pBNVjc45JqLPHEJ4GmP8bq2tqSozs3HOcUrp1ebm5relpaWdEMKbLMsMERkA3Gg0at77ryGE3Ozv7x9NT09/AHAFwCgzH8QYn6+vrz8Z/oVWq7Wmqn0imlRVn1J6LyIPOp3OwW+BOETlRI+KFgAAAABJRU5ErkJggg==",
    "title": "UnoCSS",
    "desc": "UnoCSS Interactive Docs"
  },
  {
    "id": 3,
    "url": "https://www.tailwindcss.cn",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5ElEQVQ4jbWTPWhUURCFv7nvbd6uErARwU6LFAFR/El2QXCjD6KFWOjGRrCzVQOmzUuhoEVQS7tgt7EJBkHYxFWQ/KigCBYBDdiJ5ap5m929xyJ5MagoKk51Ge45c2bmDPxj2E+ziVz5CK7+GA+w8U7M/54ykUP6kVgyErlfK0jkSMwfqqW7Q8ewF3sMAsQrD7cW4/xS+ZHCepkOY2tY+x5cnFndD/4JsBXQpkJfTJydi/PT2d8TDxR9I5AMM/XProw5uZftdud5kHOXEMNAE8gBbaQL83Fhou/hyq4gZ2cMoFJVMFnBH3hBmE/JPz1sjQ1FteYIpuvrarKCn4GcYeccidzkkHUwU3eDKNdCGbi3qq75OLph4iSyBeAj8AFYMnFq7lg0aQClWnpcxjVgJ+CQvTV0dS7OT/dW1fVmyFbXV7sFoD5gn7K5udJMsyJjCugBdgDbMfXLuF+sNUcyMIn5Vg5rdNNEskpVAYl5K82mVzot3VscLCwXayvnMbsDhEALiDDGOy1/MwyDg978voWjhdFs4ABuWxrdXhwsLJPIzceFCROngRSIACEuB6F7L3TXFEwBZB5Y22/mrlFUrhPUB6zdV0t7HFzE2CvoOON12zP+LM6/y9r5T1beRPL3x/SH8RXZ4eUTLf3TpAAAAABJRU5ErkJggg==",
    "title": "Tailwind CSS",
    "desc": "Tailwind CSS 中文文档 - 无需离开您的HTML，即可快速建立现代网站。"
  },
  {
    "id": 4,
    "url": "https://windicss.org/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACWUlEQVQ4jZWTTUhUURTH/+fe9+Y9fVqYucigRAoiFy6EMkKUggiVPsgkF+0EoU2boCiC2UW4TAoXgUFUuJEIrBDMRVpRUliSiyGQRCHF+XLezLw7954Wk49RE+q/uvfC+Z3/+bjAZjHTlrf/1YWplUNd09mWDTBmArPYnECEp2GWYKZz75NXpePNEtPE+cn0i6ZPbGN4WIKIQWRAxKUQKwR0kwYA8S5ZaZgvJeLxDxV2RWzPaqIT3d0jbSNLdY70GpVa+zJONL8eFpLOvM3UOq5V7ScSGcrKvChzDzPjlQ7ypwuKU5btjRmlLcOkglxwdqKnagLRqAhrklC3GfZHSc5XOFbMMI0apQdHO6rHyFj3VF49z/lmXyGrx6lA/QCAaNRYIGIACBLJm+T4dyAiWheIgOXll+0H8wAgXNnxur1yGQBah1LfWXNjSQ+YAGKydnYJq+KESqUDbciCrpEnn8VdNjC5VZ1tHUpYYNSRiBxRef9K0QGLcApGg5mJjWEXBjDGaBheY82+0cYCc4TZmlN+5tRU364HRQCZsIltT1K7hb/ijffWzx97tLIXKIdJZqnguHq6z1vabmdEsQTAss1dUVk10/Z4udMVci7CQczxRKxcqh8tD7N+80Cqt5j1jVUKCB0cf5qptVnv+BXPLVR5cj9niWBTWgUkbZKXWQU3grSpn75Vs8FNSJvs8RYBLP65zgJA88DqfTL2YKD4myDhKguyJDFv3EQwgQEQMS6yRAMYJlEmhPjMpAOtzLWZ69UL61Pbridb1NSfPNoQ/XngnwO219+/+W8WzyVZwnBmygAAAABJRU5ErkJggg==",
    "title": "Windi CSS",
    "desc": "Windi CSS"
  },
  {
    "id": 5,
    "url": "https://www.sass.hk/docs",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACz0lEQVQ4jUWRTWtdZRSFn/2ec+4996tporb0lmirxtyEVhsMXKutgqgTKw4ExUnBmeCfyMCZEycFB4KYoYIoFCylIH4gEo1KqJYYS6O1NU3b2MQkvR/n3cvBTev6AXvt9Tz2ylMz01mmDxTjpHCEmRmSFMwMAASAC5lhMjMsJL/StzdCksRZxCEnyiUTbiALIeByokckYUEGmMstKgpxyJNiNnUvJiKKQEAQgqlzu0ev16dSLZOWEooi0tnokuclhSSAE/rqRiNMpO5yTAGBBWN7s8Powb124rVjPDi+n3qjQqfT48+LKzZ76oxu/bNBlibIFQBPJQ9IWDA62z0Ojjd5+9SbGhquGzB434yxiVFOf/SNXb+2RpomuIThlrpcAAlGt9vjpVePMTRct36vz3vvfMLc179w757dHGk/wtZmR2bg7kgOBFJJd5uQqNTKxOhYCOSVMmvXN1j+/W9+/G6R4ZGGpVmCuw/smJOM7z86IwkC9Lp9ynmJ488dIYTA40dbPPviNA88tI+1G+vcXF0nzZJB2Y7eZKzZnsFALkrljIuLV7ixeovm/fcxNFynsatK6/ABjj8/xcL8EitXb5JmKZIjIHm4+cQMEiAE9Lt9Fr5f4quzP7HwwxK1Rs6efSPUGhWyUsoXn89TzrO7M4IkuSQJFf1C7WcOq/XoAf5d3+LMp9/y/rufIYkYnbxSFmgnSEipcDMJC4Hb211efv1pptot/Ty3aP1ewdjkKOW8BMCXZ+dNCLnYuUBKxN1kSGBw6bcrTLVbNv3kJHdyeXmFjz88x7nTc6rVcopYAIaB7IXH3hKBaCLcobu3OcLuexqWJAnbWx3++mOV9bVN1RuVgQEDM1xYkiIuBMJEVBElBczs8vI1XVq6CgymlcoZ9V0V3N12aHsgTeR+IciLk+46jzCEJFeplKlaL1Ot5+TVEmYQC/8ft2NROi8vTv4HmQSdvH7nvQsAAAAASUVORK5CYII=",
    "title": "Sass",
    "desc": "Sass教程 Sass中文文档 | Sass中文网"
  }
])
// git gitList
const gitList = ref([
  {
    "id": 1,
    "url": "https://github.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABcUlEQVQ4jY3TvWpVURAF4LXvvUmuIkEsLLQKgiAW/qAkNvoUFraCDxMlqEUCghZaiyKCjU3wBewEBTUpFEvBGJEkfjZz8HAw4sCG2XvNmv+dJEFLCS7hAT5gGz9Kv4/F7CeYwUoROvlVp5NtLGPUJ44wh+f+Xx5XwFHn5E4BL3EN69jCBj6W/qqwF2W73JGX8BO7WK23CY5jWucYZgu7XbbfcW6S5EaS2apoF+Mke621T70WfUYrbDfJOMnBJNeDd9WobZzs9aU/mdbdsYBvxXmdqg82MbPvmP44G+NtOfg6StKSSHIoyYF+5L+QW5JpkvniTUZJNgs/kmSxtaaaOCxh0lqTZCnJ0Qq6EdyrdLaqjFP/yOA03mCvyl4LztflLp6U/hRnBsSHvX7t1OjPdgZrBVzArVqohZ6DE4N1hpXhKq/jPa7i4iD1Kb70nDwrzmho9KhndLiHzVefdrDabeVwPJ1+GTcx7b3N1S+8MuT8Bs9NR9kw0z0NAAAAAElFTkSuQmCC",
    "title": "GitHub",
    "desc": "GitHub"
  },
  {
    "id": 2,
    "url": "https://gitee.com/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABsElEQVQ4jaWTT2sTURTFf/eRSQK2bkKaQqEb6VAiKPgFRJFCBBEUxKWLbMSdGxeuunDrqsWNH8AvIEIEwUL9A12I0EBSs4kFi+3CxHZmmk7fdfEycRLHgHhX78+555777nnCROwwf16J66AriiwCCNoFaQi550vsbafxkiyUar7N/lPB3lcwk8RDsFXMM5/yQ6E5GBG45O+vQK9mJWZQvfGZqyUktCivtShpi5J+rd3R4MOWnkaRZkXc66vDltcAxPV88lnBnLl+jYWXL6bW1jhmx5tHwArehZwS15OeS6uPAAg23nHw+An2R+8PAnsUDN8MA3Fd2pS2FaoAS4NviOexu3Kb4PVbzNkZpFgcVxBF2P5h8qjNnBuVugPPc1V+OsC5/TaSz48rOD7mS3FhqEIWM8c1LUyhML53JsmOTtmnU1mmU1lm794DpyAMR/eCdnMgDdBqOrFw6SL28Oh3ldkZZu/eAiDa+pRCSmNsjL4eTJWv1rJ75SbhxvvRGCFlpLjXzzTPaRhqsPlRu5dvaGK4kZH4Tysbx9Ic+MzVwKwL2L+mgQWznv4HMgn61+/8C0A56wPnYTeTAAAAAElFTkSuQmCC",
    "title": "Gitee",
    "desc": "Gitee"
  },
  {
    "id": 3,
    "url": "https://git-scm.com/book/en/v2",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACjUlEQVQ4jX2Tz0tUURTHv/fed+9749QMOmZq4ug402AJUREhQmkQji2qRbQNB2qhm2xf/0KS40AGUZtoI24iDQMXlZt+EFKLnMkpJYwif6SO7707990W5qDieOBuLt/Pl+85nENQonINsA4cbXoM7en56dy1WBbObjqjBE9qj0QeCFNchQbC8dhaBpme3Uzozo/M6YrA0rmqiEfoLDQAAnCTJ8PxWHqiAdaeBpN18NVVVqSFL/hydV0OL9myz3EKr5VS4CZPtrXEBnM7TEix53ZYtWXRtDB5NwhBPu9O+seybV9Plgerq0Nfyjg/CEogHfnwx+dMb+M32MUEk63wVZVF00Kwbrug4CoFwnBsPtHQ3vR+cZlCD4EA0BrcNJK1LdFiEjbXCl99eXTQL1i3rTSwoYNPGEI63vztwxWHHCnfck9/V1qHCUi5wY3j/opAzY3KxXHyuzMyErTMy9JT2/ryGQw/8vYdS8MUBk0W3IXmFdujwUDlSNAyz0Jr5G05TD1C17QGNAg0UHzQADxAEe3uM80ajVBnYZ16TJMNIQAFtUrnxrLdrpQpi9LiTPX/GCYjzCCUEqohBB5VVYemLMHOABrSLQxMj+auEwCYAIwTiWi/3xS9tqfAiEZBYXFF2uc9l/JyP3vBDSPAQEEpgZRu6s2zbF8HUKAA0AEUno5l+9aknbYoAwWB8tSvjzOzn36uuFNakz8EAKVA3nEHN+FtewAA7wAeuxDp93Orx/EUbOW8oh6hFudtFmP469qDH57nbm7CAMC2GgwBXmNmcTwe3h/yCX7KZDwsDFrPKcO6I1NPRmduXdkCl6z7AF9ORFPuxWYtL8X1Sld0YKL04ZU2WUjE7i13Re7uBf8DNZgMfT0tE+UAAAAASUVORK5CYII=",
    "title": "Git - Book",
    "desc": "Git - Book"
  },
  {
    "id": 4,
    "url": "http://www.svn.org.cn/",
    "icon": "",
    "title": "SVN",
    "desc": "SVN中文网 - svn安装、svn部署、svn操作手册、visualsvn"
  },
  {
    "id": 5,
    "url": "https://svn.com",
    "icon": "",
    "title": "Full-Service-SVN",
    "desc": "Full-Service Commercial Real Estate Firm - SVN® International"
  },
  {
    "id": 6,
    "url": "https://www.toptal.com/developers/gitignore",
    "icon": "",
    "title": "gitignore.io",
    "desc": "gitignore.io - 为你的项目创建必要的 .gitignore 文件"
  }
])
// js运行工具 runToolList
const runToolList = ref([
  {
    "id": 1,
    "url": "https://zh-hans.eslint.org/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACF0lEQVQ4jaWTTUhUYRSGn3PnNjr+TGQ/UJsIy01ScxsqkBmjhdAYLiJqE0EUbYKsSEgyYnIiAokgA/cuy42BykSGaC4Ka4x+qIiyVRH0n6PM3PudFjp61USis/re9zvn5fvecw78Z4gfNERHSjwzcQOlfJH8cXtCTt15HftVIGz/rTHZZpBjs7LyDVSBigLjlchnoLmArcKh3hler0jTFFJP0Y6Ala/ycoFNirQDLoBiTieiw5ULBBDTBoQU+nHV6cvUnog2RKprDm5x+jKxRkW3KpoGisR41+Z4kHAGdwkMoJLsHY1fSqW+b/A82kD2T+d1A03J5PK3e52hcwpXBep6MvF7coBbgXFn7QgQEaOHt+9z7oJ+AC2eZ2AO3MpH3a92gulCeJ4Nu46VddYdASIzrtqBor8UAwTBnuWV6tCP4HFL1StbpGVLhoiWWaW5VR2ovvGRrgi6MBkF4/pe8C77Nd9u3X65OWfQMwBqSUVLS+lHVWqAh776EdeVeDK5YsyIWQmggcDZgbHdkzMjk3AGeyysPSp0elJ8Pv04+qm19echY8SG8s4nXf2rXTt4GeQowv3eTLwO/yjX7xiqIi/PQIMKv8WSK9kv+eshe0IlHG5E9QIQBlzPSCT9NPaC+buQ2PagTVSbfP98LyKeohtnKb3Zl6k9WcBzdoFldopcfo1CCdPyOuXnKICoTlqeXPy3Xi0RfwDIF9FxRlRarwAAAABJRU5ErkJggg==",
    "title": "ESLint",
    "desc": "检测并修复 JavaScript 代码中的问题。 - ESLint - 插件化的 JavaScript 代码检查工具"
  },
  {
    "id": 2,
    "url": "https://www.prettier.cn/",
    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACY0lEQVQ4jS2SX2tUVxTF1z73nHvv/MnMJDNCgooFwdQoDSTmQSkIpQ9C3/sJ/FB+g9Iv0KeWQlGkJQXFf4hNHA1JnMk4bZq5d+6fc/bqw+1+XA97/fbaSza2dqmKsqKAShMJ/h9CjE3iQKpCpBGMZQhRv9+7uweyLVFekARI4+xyNj/bfzYYdLtOSYTgl3luvchqVT34MPaK/WJxb8t0kqgGAtXbyn4TfTzL/3gfdbqJBgFgGwIllFSlGCkuFu0Sg06P4i4SysDQlQwNFmykvEiS325cp6IF/Frb6dH4+ly3v7htwafv/sy+vLQ6PMmmn8U5ADLc3Lm6yodfexvhcKY/PHGd3opG0Wxx/iBOd3qrvvJ/B/0xX0jsiiyzBqEIw7fn97viDqaTf/T3ljgpynhpVm6WrWuf1bOqDR4TBACrYtK6SA9fvrHZ3ibW+vx5rOnmraHqQd+fBnVxPH8/FuRGhM3RteFpWp9aP7EYiLnpojS287rKiqFld/ZvdnCsK9Y1FlFvbb3udvPdnWR0Zf8kWbyYfddvXzubTMeHqW/tpaP86OPp+XHa7nhf+7qW0eb25f5oZ+OrV5OfHn4bV5J4xArTS8274/zRL/XaoO/Ekhp8WOa5BeBDuNTp3L/x/eujOFsWTw4fw1HEKFfWB0KhqooYIhC0EZAZPl+P5uPj7danq5dd+VepdRoZAWCEJCAA2LzYEmLoW9kkzaZtnbSzOKLCiJEmRkAgFBGBNLEa0ymrOy/ewMXlcnTyKdCf0waFAUgAFIKCxguysbUbyByg0ghF0IIREgIQTa1JNvvFmP8A4xFQys4Wd8wAAAAASUVORK5CYII=",
    "title": "Prettier",
    "desc": "Prettier 中文网 · Prettier 是一个“有态度”的代码格式化工具"
  }
])
setTimeout(() => {
  const alist = [
    {
      id: 23,
      title: 'css',
      icon: '',
      children: cssList.value
    },
    {
      id: 24,
      title: 'pc组件库',
      icon: '',
      children: pcComponentList.value
    },
    {
      id: 25,
      title: '移动端组件库组件库',
      icon: '',
      children: mComponentList.value
    },
    {
      id: 26,
      title: '图标',
      icon: '',
      children: iconList.value
    },
    {
      id: 27,
      title: '动画',
      icon: '',
      children: animistaList.value
    },
    {
      id: 28,
      title: '插件',
      icon: '',
      children: pluginsList.value
    },
    {
      id: 29,
      title: '图表',
      icon: '',
      children: echartsList.value
    },
    {
      id: 30,
      title: '框架',
      icon: '',
      children: frameList.value
    },
    {
      id: 31,
      title: '编译',
      icon: '',
      children: compileList.value
    },
    {
      id: 32,
      title: '模版引擎',
      icon: '',
      children: templateList.value
    },
    {
      id: 33,
      title: '包管理工具',
      icon: '',
      children: packageList.value
    },
    {
      id: 34,
      title: 'css',
      icon: '',
      children: cssList.value
    },
    {
      id: 35,
      title: 'git',
      icon: '',
      children: gitList.value
    },
    {
      id: 36,
      title: 'js运行工具',
      icon: '',
      children: runToolList.value
    },
  ]
  alist.forEach(item => {
    list.value.push(item)
    sidebarList.value.push(removeChildren(item))
  })
}, 0);


// design 设计
// 在线设计 zaixianDesignList
const zaixianDesignList = ref([
  {
    id: 1, desc:'', icon:'',
    title: 'Figma', url: 'https://www.figma.com/'
  },
  {
    id: 2, desc:'', icon:'',
    title: 'MasterGo', url: 'https://mastergo.com/' 
  },
  {
    id: 3, desc:'', icon:'',
    title: '即时设计', url: 'https://js.design/'
  },
  {
    id: 4, desc:'', icon:'',
    title: 'pixso', url: 'https://pixso.cn/'
  },
  {
    id: 5, desc:'', icon:'',
    title: '在线PS', url: 'https://ps.gaoding.com/#/'
  },
  {
    id: 6, desc:'', icon:'',
    title: '稿定设计', url: 'https://www.gaoding.com/'
  },
  {
    id: 7, desc:'', icon:'',
    title: 'Canva可画', url: 'https://www.canva.cn/' 
  },
  {
    id: 8, desc:'', icon:'',
    title: '在线制作ico图标 比特虫', url: 'https://www.bitbug.net/'
  },
  {
    id: 9, desc:'', icon:'',
    title: 'Android Asset Studio 安卓.png9图', url: 'https://romannurik.github.io/AndroidAssetStudio/index.html'
  },
])
// UI参考 ckDesignList
const ckDesignList = ref([
  {
    id: 1, desc:'', icon:'',
title: '灵感集-美叶UI', url: 'https://ui.meiye.art/album'
  },
  {
    id: 2, desc:'', icon:'',
 title: '站酷ZCOOL', url: 'https://www.zcool.com.cn/'
  },
  {
    id: 3, desc:'', icon:'',
    title: '中国传统颜色', url: 'http://zhongguose.com/' 
  },
  {
    id: 4, desc:'', icon:'',
  title: 'UICN用户体验设计平台', url: 'https://www.ui.cn/'
  },
  {
    id: 5, desc:'', icon:'',
title: '图怪兽作图神器', url: 'https://818ps.com/'
  },
  {
    id: 6, desc:'', icon:'',
    title: '司机', url: 'https://www.tusij.com/' 
  },
  {
    id: 7, desc:'', icon:'',
    title: 'Fotor懒设计', url: 'https://www.fotor.com.cn/'
  },
  {
    id: 8, desc:'', icon:'',
title: '创客贴', url: 'https://www.chuangkit.com/designtools/designindex'
  },
  {
    id: 9, desc:'', icon:'',
    title: '拍信创意', url: 'https://www.paixin.com/' 
  },
  {
    id: 10, desc:'', icon:'',
   title: '500px摄影社区', url: 'https://500px.com.cn/'
  },
  {
    id: 11, desc:'', icon:'',
    title: '免费素材图片', url: 'https://www.pexels.com/zh-cn/' 
  },
  {
    id: 12, desc:'', icon:'',
    title: 'Pixabay', url: 'https://pixabay.com/'
  },
  {
    id: 13, desc:'', icon:'',
    title: 'Unsplash', url: 'https://unsplash.com/'
  },
  {
    id: 14, desc:'', icon:'',
    title: 'Humaaans', url: 'https://humaaans.com/'
  },
  {
    id: 15, desc:'', icon:'',
    title: 'UI Faces', url: 'https://uifaces.co/#browse-avatars'
  },
  {
    id: 16, desc:'', icon:'',
    title: 'Mockup Photos', url: 'https://mockup.photos/'
  },
  {
    id: 17, desc:'', icon:'',
    title: 'coverr', url: 'https://coverr.co/' 
  },
  {
    id: 18, desc:'', icon:'',
    title: 'colorhub.me(调色板)', url: 'https://colorhub.me/' 
  },
  {
    id: 19, desc:'', icon:'',
    title: 'Kaboompics', url: 'https://kaboompics.com/'
  },
  {
    id: 20, desc:'', icon:'',
    title: 'Mockup Generator免费模型生成器', url: 'https://www.pixeltrue.com/mockup-generator' 
  },
  {
    id: 21, desc:'', icon:'',
    title: 'FOCA Stock', url: 'https://focastock.com/'
  },
  {
    id: 22, desc:'', icon:'',
    title: '优设网官网', url: 'https://www.uisdc.com/'
  },
])
// 课程 hukeList
const hukeList = ref([
  {
    id: 1, desc:'', icon:'',
    title: '虎课网', url: 'https://huke88.com/'
  },
])
// 字体 fontList
const fontList = ref([
  {
    id: 1, desc:'', icon:'',
    title: '站长字体', url: 'https://font.chinaz.com/23100345731.html' 
  },
  {
    id: 2, desc:'', icon:'',
    title: '100font免费商用字体 ', url: 'https://www.100font.com/' 
  },
])
// 素材 picList
const picList = ref([
  {
    id: 1, desc:'', icon:'',
title: '千图网', url: 'https://www.58pic.com/'
  },
  {
    id: 2, desc:'', icon:'',
    title: '千库网', url: 'https://588ku.com/' 
  },
  {
    id: 3, desc:'', icon:'',
title: '我图网', url: 'https://www.ooopic.com/'
  },
  {
    id: 4, desc:'', icon:'',
    title: '包图网', url: 'https://ibaotu.com/' 
  },
  {
    id: 5, desc:'', icon:'',
    title: '昵图网', url: 'https://www.nipic.com/' 
  },
  {
    id: 6, desc:'', icon:'',
title: '图虫网', url: 'https://tuchong.com/'
  },
])
// 其他 otherList
const otherList = ref([
  {
    id: 1, desc:'', icon:'',
title: 'Figma软件汉化', url: 'https://www.figma.cool/cn'
  },
  {
    id: 2, desc:'', icon:'',
    title: 'Figma 提升访问速度 2.0', url: 'https://zhuanlan.zhihu.com/p/402819516?utm_medium=social&utm_oi=1365070314515251200&utm_content=group3_article&utm_campaign=shareopn&s_r=0'
  },
  {
    id: 3, desc:'', icon:'',
title: 'Figma 中文社区', url: 'https://www.figma.cool/'
  }
])
setTimeout(() => {
  const alist = [
    {
      id: 37,
      title: '在线设计',
      icon: '',
      children: zaixianDesignList.value
    },
    {
      id: 38,
      title: 'UI参考',
      icon: '',
      children: ckDesignList.value
    },
    {
      id: 39,
      title: '课程',
      icon: '',
      children: hukeList.value
    },
    {
      id: 40,
      title: '字体',
      icon: '',
      children: fontList.value
    },
    {
      id: 41,
      title: '素材',
      icon: '',
      children: picList.value
    },
    {
      id: 42,
      title: '其他',
      icon: '',
      children: otherList.value
    },
  ]
  alist.forEach(item => {
    list.value.push(item)
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