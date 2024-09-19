<template>
  <div class="home-page">

    <form class="form" v-if="!isLogin">
      <div class="form-item required">
        <label for="username">用户名</label>
        <input id="username" v-model="form.username" type="text" placeholder="请输入用户名" />
      </div>
      <div class="form-item required">
        <label for="password">密码</label>
        <input id="password" v-model="form.password" type="password" placeholder="请输入密码" />
      </div>
      <div class="form-item">
        <button type="submit" :disabled="loginBtnD" @click="login">登录</button>
      </div>
    </form>

    <div class="lists empty" v-else>

      <!-- 未启用 -->
      <!-- <div class="list" v-for="(item, index) in projectList" :key="index">
        <h4>{{ item.title }}</h4>
        <a class="item" v-for="(item2, index2) in item.list" :key="item2" :href="item2.url" target="_blank">
          <img :src="item2.img">
          <span>{{ item2.name }}</span>
        </a>
      </div> -->

      <div class="project-titles-box">
        <h4>项目列表</h4>
        <div class="project-titles">
          <a v-for="(item, index) in projectList" :key="index" :href="`#${item.title}`">{{ item.title }}</a>
        </div>
      </div>

      <div v-for="(item, index) in projectList" :key="index">
        <div style="display: flex;gap: 10px;">
          <h4 :id="item.title">
            {{ item.title }}
          </h4>
          -
          <a href="#郴州市科技创新服务平台"> ^ TOP</a>
        </div>
        <table>
          <tr>
            <th style="text-align: center;">图标</th>
            <th style="text-align: center;">名称</th>
            <th style="text-align: center;">描述</th>
          </tr>
          <tr v-for="(item2, index2) in item.list" :key="item2">
            <td><img :src="item2.img"></td>
            <td><a :href="item2.url" target="_blank">{{ item2.name }}</a></td>
            <td>{{ item2.name }}</td>
          </tr>
        </table>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'

const isLogin = ref(false)

const form = ref({
  username: '',
  password: ''
})

const loginBtnD = computed(()=> !form.value.username || !form.value.password)

function login(event) {
  event.preventDefault()
  if (!form.value.username || !form.value.password) {
    return alert('请输入用户名或密码')
  }
  if (form.value.username !== 'admin' || form.value.password !== 'admin123') {
    return alert('用户名或密码错误！')
  }
  isLogin.value = true
  window.localStorage.setItem('isLogin',true)
}

const projectList = ref([
  {
    title: '奥峰',
    list: [
      {
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADE0lEQVQ4jXVSTWhUZxQ93/e995xJXua9mEwyiYOjo0nIXzOpSQsmWsMQhEIWsdgiURSJ0oWIobS7lq4LLZS6KVVoV6XQdlPpIgrVtiqNhhLNaOwwSkadjGkTXyad//d918WMoKJ3c+/innvPORyGV5cAoANgAMoAtOqsntkpsVeAvSdf3/DDoL8cypWF+Hau/PE9X3vrWHT3CaFpWc65cBxHTk9PH9deAHIAqqvB2jnVlxvbEiDAVXDJ+GRqduXzzq7Ott7e14RSCouLi5iZmfHxZ9GfVnt/kxwvuVCxpCitrhHGtlKklFlxfrt0+Zdbt2KIxWJIJBKqWCyql0ngAQ8O1elofpjDyvt9nr2fDbn7v5rjV6d+L00E/f5OqWlSSonl5eWZF+nDa28bZ1uPptA2lUR4Mg4t8OHdw2L12nv643bLE32Z00+LADDmH/5S+kf64GmwRG3rRsrl10JsIf5Ojxi4vw5cSclzX++AOLdUwfDnvnt9b8ratrcgs1L8ezEr3TyhsWPki/mahbRDhdEg7e3dqA0en4X7HG2ACACk1X9MmWGD5VOP9Qc/n2L5lMN9oYYH9EbLxaT712gIzZt8fA8DBFUYg1fCwcgCwtLsGAcMEpk7fxRk+Qxfj18iZhD83SOnb/KrmSLDZDd9ANTZrCq5egAoNu04LM2OeuTvKVq5fhYAsPr3WWSTxK0t7ZdXe7TZR+WFoVZY0c3uxFPfOABlA3a5tvMgdEuJzD/XZDE9DRCXueSvIjN/hXQb8A8MfTNP5wMmtHe3uwdQkcE5ABTs8D5ltoVRTHOemT9TzT6Jms1vK8MOkyy4rD448P1iyJlbkqnhICK7gp4DDFAcgCbtwSNUE1L8/3iivHbnJ4AYwICmnR+phuFWKKmYt0VH4+7Ij3F1vivANuzZJKMATG547TEl6oZZ9i7nzsJ3AByAkaZZURLmLmSTYIW0Qbk0mNczevq2L/lngnL9jTjSUod+Br02IozmbqiClPnUBQD/AQAMs0fo/ohkKAlQJfLEDJldvtHhK7YETKqfTckLTwBi30Zz/OV1lwAAAABJRU5ErkJggg==',
        name: '奥峰后台管理-测试后台',
        url: 'http://119.91.209.77:8088/index'
      },
      {
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADE0lEQVQ4jXVSTWhUZxQ93/e995xJXua9mEwyiYOjo0nIXzOpSQsmWsMQhEIWsdgiURSJ0oWIobS7lq4LLZS6KVVoV6XQdlPpIgrVtiqNhhLNaOwwSkadjGkTXyad//d918WMoKJ3c+/innvPORyGV5cAoANgAMoAtOqsntkpsVeAvSdf3/DDoL8cypWF+Hau/PE9X3vrWHT3CaFpWc65cBxHTk9PH9deAHIAqqvB2jnVlxvbEiDAVXDJ+GRqduXzzq7Ott7e14RSCouLi5iZmfHxZ9GfVnt/kxwvuVCxpCitrhHGtlKklFlxfrt0+Zdbt2KIxWJIJBKqWCyql0ngAQ8O1elofpjDyvt9nr2fDbn7v5rjV6d+L00E/f5OqWlSSonl5eWZF+nDa28bZ1uPptA2lUR4Mg4t8OHdw2L12nv643bLE32Z00+LADDmH/5S+kf64GmwRG3rRsrl10JsIf5Ojxi4vw5cSclzX++AOLdUwfDnvnt9b8ratrcgs1L8ezEr3TyhsWPki/mahbRDhdEg7e3dqA0en4X7HG2ACACk1X9MmWGD5VOP9Qc/n2L5lMN9oYYH9EbLxaT712gIzZt8fA8DBFUYg1fCwcgCwtLsGAcMEpk7fxRk+Qxfj18iZhD83SOnb/KrmSLDZDd9ANTZrCq5egAoNu04LM2OeuTvKVq5fhYAsPr3WWSTxK0t7ZdXe7TZR+WFoVZY0c3uxFPfOABlA3a5tvMgdEuJzD/XZDE9DRCXueSvIjN/hXQb8A8MfTNP5wMmtHe3uwdQkcE5ABTs8D5ltoVRTHOemT9TzT6Jms1vK8MOkyy4rD448P1iyJlbkqnhICK7gp4DDFAcgCbtwSNUE1L8/3iivHbnJ4AYwICmnR+phuFWKKmYt0VH4+7Ij3F1vivANuzZJKMATG547TEl6oZZ9i7nzsJ3AByAkaZZURLmLmSTYIW0Qbk0mNczevq2L/lngnL9jTjSUod+Br02IozmbqiClPnUBQD/AQAMs0fo/ohkKAlQJfLEDJldvtHhK7YETKqfTckLTwBi30Zz/OV1lwAAAABJRU5ErkJggg==',
        name: '奥峰后台管理-线上后台',
        url: 'http://120.79.155.29:88/'
      },
    ]
  },
  {
    title: '小小龙课堂',
    list: [
      {
        img: 'http://edu.hnsilian.cn/favicon.ico',
        name: '少儿课堂-测试后台-pc',
        url: 'edu.hnsilian.cn/index'
      },
    ]
  },
  {
    title: '郴州市科技创新服务平台',
    list: [
      {
        img: '',
        name: '郴州科技创新服务平台-pc',
        url: 'http://www.czkcfw.com/'
      },
      {
        img: '',
        name: '郴州科技创新服务平台-h5',
        url: 'http://miniapp.czkcfw.com/'
      },
      {
        img: '',
        name: '郴州市科技创新数据大屏',
        url: 'http://116.205.179.231:8034/'
      },
      {
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADF0lEQVQ4jXWTb2jUdRzH35/P7/v73c3b5e3uwikXy7EtY8uksaGZUTNl2J4kCgZS7IEJhg8kkKan/igdediDiGoYE60HRUREZAhzKiUujQ0SadWSmtOdrmvzdrvdfv++nx7Mk4j5efx5vz5/34QFQgAmQE9swbpQAt8HCWiKQocJqvQPXLeA5uoeXBOAeCEAARoAfAfDcwUeikyDrRyUlcNYVQmd1T24ZsNmAoQWAswzIAAgz6BqNBXePK5i8U/za0c+ynVch3vnBgbfzJcTHyDeaix7fmVdXkLLixKrBdxUGMFIwigsXsR4sYJw4mpf+jNaqGqy7chTSowmzdIE0HpmXQcRx6T8qrG+zHhLu705Zsh75BVXqP+L6zd073R98aYC/sFi/y02VI0mE9p3z94+mxkHgCcjxRYB/3G9WOmUAfLY2r3RqmjkyKzWgyPn06eS67s7mM0a0b5DbIYs0t+c2NX5yF8z0R2BdlcGPnX2XjjqKwCUWrMnXBcLnXQoOPPjt4dOzbdEL4EMEfFN1u5Ue3LqZtHn1ZWmf2lv74cHBaAXujY1KACyYan1rsDzTn71zscACK3dcQg2QrtgtjgI3NO9nx/7mu6NeWnPmoqhWMW2kHb71YHtu9eZana7Ycw+Xd5FchG1k6FSov0A4pMF95Oy+KrdUmsY/i5Q6YvmQwM3uD6Rf70hPjldPz3wu23Pn5VYXgGRMBsGizc03n/wHACMvl23JaKKGYucLxvTA1cEILU8lquxlH5oJl77sJ3+5Vai7XArMT+LwIVDYe/uTNUxydATN53qfQRHByi+UZ/OjgpABAjH1N3hmsqZ6BKd7XGOLn3cZOwkwwy7ovSjoQn6beP+HZNe5QcGSn2pA2PbatPZUdsGl0dSVpDLFAu6tTFW6rh8e3EbE5QfeAhgGs8lR35qCE+cuZyNH1/9/uT0PaMR2fNeuf/Kw13RxIpoYdPLP796+Lu/G5eEyc8Sge/M0Spc7JoCALHB/xXeB9gA24BG8tdlkabT/RFj7k+taRJEF3Pnunpea242jw8Oeg8wHf4FXBxN1K2KqVkAAAAASUVORK5CYII=',
        name: '中国浙江网上技术市场',
        url: 'https://www.51jishu.com/home'
      },
      {
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACFklEQVQ4jXWSPW4UQRCFv+np2T+vwQhhaRNwQOrMiUXERRBwFkLuAAGn4BJOLHkDomVtozG7sr0/np/uegQzu94Av1ZJLXXXq1f1CknJJs7Pz9+v12v9L5bLpfI818XFxbfdHGaz2fbTbDbTUwghqCxLjcdjTSaTLUmyWCz081fB9K7iwFd8eHdEVdXM7xbsIsYIQP7nkk6WYWbfj4+PP3uA6W3F9LaEofEUnHOYGS9eHnKwv8dqtfx4dnb2wwMYIkjcFQGANHUMBz2cSyEBiw2xEBJkWUan22M8HjsPIIFJmNTKNRarB7IsIwGqqkZgJpyZOHi+b5n3xBjZKnAOsjRpK7WQEGACgWv4EwAnIBAagihRBGOdRCQhacuyuUq0b2AGMhGKgJdENFGbEdsPqEm4vr4i8ymSyPOc4XDIal3y+s0R3nsmk8kzr1bBJpoDBqRpik9ThsM9RqPRoypEDJHT09OvHkEwo45GMMPagTZKEnq9HnUdqarF1oUNQgRviGBNcjQhe+x3sDfg1eFh27e2bm1mU5QVXoK4U1USSeIY9PuUhZGmnrKseCgKzESMRtbp0u12cWmKwyCaWNdG4hrLEufo93v4doDRImbaRgiRGEWMwhvw6WTEsop0iMzn8x27ms3sdLqkaYdowuxx6czAT6e/v9R17RKDGriE1gO4v1+c3OT5W2vnYyZMiYlmOWZ/b67+ARbw6ivXuyeBAAAAAElFTkSuQmCC',
        name: '潇湘科技要素大市场郴州分市场',
        url: 'http://www.czkjcx.cn/'
      },
    ]
  },
  {
    title: '同仁市中医院',
    list: [
      {
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADmUlEQVQ4jV3TS2xUVRwG8O9/zrl37sx0OtN59TGFttQWW4FGGkKhiYBS26gNmCgJMTaEkmiMGxfIQhtDXBg2PqISq7LxjYlAAkGwplRLJZaG2BpDQzttx7bTF51x+pjHnXvucUE04rf6Nt/u+xHuhQAoAOh9v6s5eXf+WDa9tk8xrYwLASubjru8vmvCMD498Oq7A//d0D9l+OpV99TQpVOJ2Win7vIYShjIra8qZUuEKmvJzq1jLbGY9UeqzohQ+ERrx/F1AEQKoLmhi85rZ7+8gFy6BZ6QnZi+I2t3PiIKAyWKMQ5pSxq90WfVNO3nf974njF3UU/N7t0HG9tfyPCTULTdd/LtcGn5YeGP5CAz/MmXu/i2lkPkLdsE3eWhuuZWVDzUwMZ/7YXU3KZL2LXxyUnftusjl3nPaWq6Gxv7YGFuRoUrN4m2l14nT7iKQBzRoX766rWjtOPpTvKWbKTKB8oxPzXBbg8OSI2x7S92PPcjb9sSeRO2asznTXvnU4eYO1iB2MggDXxzWjEusDw1ivxfM0hnJQVLiuHhaYqOTymH4JqZXRPCMs29urtQhavrWEFoI4Z/OIdbl75QzqIgLcaikIqQznP8/Pl7KlZZgieOPE+R6s1sPbGs8pm1R5lSFGGGEy5PIYWq6iizmsRqYhEupwPVDY3QHE6UPfgwSmq3wucvRC61bPuKvMQcBhSoVJDg0HQnuBBQtrRHes6Tx1OARGwM07dHoDldGL5yFhUVxaip3wJd0wAAuuFCjqcgSMlZ3eGoWEkmVHplmcxsFi3PtEIEK3Fn6CbGbt1ES9sulG+uITuTVbZNtJJaVbquESlrTtiW1cdhH8lmcnJ1YZof7eqCIz1D7vpmhIIBFfvjN3DhQPT3UfJ63TD1IuQlsw1mCVvKXuYJRbpTi3FTaDp6P/tQ+SNVcBYUqtzYL0jPT5DD6aZcJk2WmVU55kHfxSuKk0Jqad70hCLd/NvewZnD+3cVJ8aHm1IrK+Z0dIIFN1aTNxQgxpiStsTWPXtIuPy43vOTSszF81Yyrute/0fPvtH98b9X7j/33QWHxlrSkuxcJiMDxWHhDwSUtCWSS0sUn5y0lG3x8g0bmGlTT9WOAwcb29sz92Ea7f/6lDRznZrDMJYX5mEU+JSUFpS0yMEBbjizxLQz9XsfO9HQ2nEP0/85X37neHMyPnuMgH0SqsyWNnRdi4OLvkCw9JPHX3nrPs5/A/Etm2GtBfHPAAAAAElFTkSuQmCC',
        name: '正式-网站公众版',
        url: 'http://trszyyy.cn/public/'
      },
      {
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADmUlEQVQ4jV3TS2xUVRwG8O9/zrl37sx0OtN59TGFttQWW4FGGkKhiYBS26gNmCgJMTaEkmiMGxfIQhtDXBg2PqISq7LxjYlAAkGwplRLJZaG2BpDQzttx7bTF51x+pjHnXvucUE04rf6Nt/u+xHuhQAoAOh9v6s5eXf+WDa9tk8xrYwLASubjru8vmvCMD498Oq7A//d0D9l+OpV99TQpVOJ2Win7vIYShjIra8qZUuEKmvJzq1jLbGY9UeqzohQ+ERrx/F1AEQKoLmhi85rZ7+8gFy6BZ6QnZi+I2t3PiIKAyWKMQ5pSxq90WfVNO3nf974njF3UU/N7t0HG9tfyPCTULTdd/LtcGn5YeGP5CAz/MmXu/i2lkPkLdsE3eWhuuZWVDzUwMZ/7YXU3KZL2LXxyUnftusjl3nPaWq6Gxv7YGFuRoUrN4m2l14nT7iKQBzRoX766rWjtOPpTvKWbKTKB8oxPzXBbg8OSI2x7S92PPcjb9sSeRO2asznTXvnU4eYO1iB2MggDXxzWjEusDw1ivxfM0hnJQVLiuHhaYqOTymH4JqZXRPCMs29urtQhavrWEFoI4Z/OIdbl75QzqIgLcaikIqQznP8/Pl7KlZZgieOPE+R6s1sPbGs8pm1R5lSFGGGEy5PIYWq6iizmsRqYhEupwPVDY3QHE6UPfgwSmq3wucvRC61bPuKvMQcBhSoVJDg0HQnuBBQtrRHes6Tx1OARGwM07dHoDldGL5yFhUVxaip3wJd0wAAuuFCjqcgSMlZ3eGoWEkmVHplmcxsFi3PtEIEK3Fn6CbGbt1ES9sulG+uITuTVbZNtJJaVbquESlrTtiW1cdhH8lmcnJ1YZof7eqCIz1D7vpmhIIBFfvjN3DhQPT3UfJ63TD1IuQlsw1mCVvKXuYJRbpTi3FTaDp6P/tQ+SNVcBYUqtzYL0jPT5DD6aZcJk2WmVU55kHfxSuKk0Jqad70hCLd/NvewZnD+3cVJ8aHm1IrK+Z0dIIFN1aTNxQgxpiStsTWPXtIuPy43vOTSszF81Yyrute/0fPvtH98b9X7j/33QWHxlrSkuxcJiMDxWHhDwSUtCWSS0sUn5y0lG3x8g0bmGlTT9WOAwcb29sz92Ea7f/6lDRznZrDMJYX5mEU+JSUFpS0yMEBbjizxLQz9XsfO9HQ2nEP0/85X37neHMyPnuMgH0SqsyWNnRdi4OLvkCw9JPHX3nrPs5/A/Etm2GtBfHPAAAAAElFTkSuQmCC',
        name: '正式-网站员工版',
        url: 'http://trszyyy.cn/user/'
      },
      {
        img: '',
        name: '前端参照地址',
        url: 'http://zhongyi.lishgu.work/'
      },
    ]
  },
  {
    title: '碳交易',
    list: [
      {
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADAElEQVQ4jW1TX0xTdxT+zu/eXi2Ukogg9A9ULd2ajFl9Gc0SCWocVML2QH0wIRr3gAGdMfow/5QQfHCpT/C0F8myJZLUaIjxYdmIfdicMFiWsNkiGohpGtgMUNYWvL3c39mD0BDCeTtfvi/n5JzvA3YoZlaYWWGANnraiQcA6tbG4/GcJU2bJaJfAFgBHGpsDJ4lou/9/obS5eWlPQsL6dhWDQEQAGRTU9NXPT0XB+4PD6/u3Vsx4Xa73YFA4ICnrg79/f1zpaVlrpMnT1ii0WjH1NTUww0to6+vTwBAZ2dnLBq9K2dmZgzeocbGxgt37nzDoba26MZwpbgFMwsAB7u7ezLz8/NmpLfXYOZ1ZuaVlRV561bEyGRWZFt7+yzKUBHjWFEsNu8GoDwUCu0yDIOkaYrk9LQYGhriVCqFd7ouiAift56yl2chw3QaCIcV9L3XKwDg9/tvp9Pp4so/j46aPp+PE8mkuYn99GqcMXj0Hn78zFv8AjMzEYnGYLDF4XCAmU1IFqlUij4OBPByepo+qPcxEeEPdZ6bj7eeX87/F557VvtEX9OHiJkFETXEHjyYDHd0KHqhgCzp2L0GyDWDUGJhUyPoqokzr76FV6s096sV4qmcFaNzE3dVIpKaZm1JJJIqAKiaBcd+vcFWTSNHSRW/zryhwxX1OMZejn83jLd5l5gJNYA99n+R/2dAAaDUOJz9T+PxusnJCfnpJ0GatWeRz+XpI6uLMnIV5TmFjeEX+LK+Fd1Hvli/9/tj5U9v7iGaR35AZWWl1+lyF2o9Hmmzlxd8vg/lo5ERudUDV65dlYm/XhSxc9d6GJf9RzetbnE63RGnq5Y9+w9w1b7qdVuZvfD19euFv5MJo6vrgmG1lugDg4Pm4tIi34xEdNc+x6WtVgYA1NS4WoQiIkJQEESUz+Vgs9mQzeVgte4GGLLW7Y6PjT3vBfAbGARCMWW0YSaqrnY1qSqaFYvloGEYJapqyZrG+ktAxtPp9PP3XycCILcnU2wHdog5bef9D6xyfgwUPL3YAAAAAElFTkSuQmCC',
        name: '碳管家-管碳减碳一站搞定',
        url: 'https://www.tanguanjia.com/'
      },
      {
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAClUlEQVQ4jVWSzWtcZRjFf+e9c+98Z5ouqrY1lFJok6KCCOpGRRdqq4uCuJBiC3UhFlr6R7hQKUVBBP8BvxBBpbqwG6PQhUtrUzM0NaQ7IxonMzdz77zHxZ2h8Wzf9/lxnvMcAdBa/Ag4gzwEBCHFXmZ48+T0/RvQM8hjsCFp4fgJw5vnApUeRmpizWO6ELqIW8xk/45CB7sLzANN0FGACiDGWAYXKKTESb8Z/708m294/D6erKOQYgqwsYt7AAjIoFAHVubSnROj0cbdzUsHXv3r4sHTeX57vROKE5j+9A+gsBsQQcJeYzJ8cWvr9mr/zfv2tWrJO60see/uW/sfHAz6NxqxeB7TB4kQJ7sACkAklmed3/lj+bXe/IFu4/NEOpSI+/e20i9unJvbO8pX1/D4dcD/d2C6xPil89VlgR59YO5KI9XTo4JiVFA0Mj1+eE/vsgCP+tfx5Fusud0OhllSfipg8/zCc1ktnBnksQyBRIFkkMcyScLZPy8sPCsgkz8D8hkgQNxOXfYBZ/X4Ui1gW3YkYGTLaSKnNZ8CXHO5Ah7MdhfYUlJO3SS4ipSqNZIwBkVqAFKsTjkFTJCapdP9gGLpq0iSHCQKwRicAMoLfw2odH0BqQnEaYjq5pGTgHsfbHw/Gsd322modTJlnbqydhaSwXjy9r4PN74DvBN5BdSpOgjQWvqJoEcoho+xs3YLYPPCwRdqiV6ujqSv9lxZ/wGA9NATZO0fwdfZ/u2pau3m0jXax0372ArZ4Yc8A++SQTSPPElr8Q7t46a5dA2oQkE0p40+Slr/WcmxjxuJr/aSfA3g7zI7ItdOAW8g0grnxj0A/AJexHEbqYHC+dw+nZfNrcqMeuAu+B/QDqgN8VeA/wAqHBijqoFyWgAAAABJRU5ErkJggg==',
        name: '维多（中国）能源有限公司',
        url: 'https://www.vitolenergy.com.cn'
      },
      {
        img: '',
        name: '郴州碳管家-pc',
        url: 'http://www.cztgj.com/'
      }
    ]
  },
  {
    title: '干衣机',
    list: [
      {
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC/klEQVQ4jV2TT2icVRTFz7nve2++bzJDGtC6aMJ0IdKE1oREEAu66KarLgTHhYiCqMU2sS4UF1qJQYUurNSkGtGNWly0xYJupFAqglIEUxpR7CpBoSBqM3HSzHx/3r0uUiX4W124lwPnHg6xBQEYACRHlx4i+BSBB6nVMGA08b8ZeRmRH5Xvj1/BNvjfdOjLut/dOkHTw6DziDloagBgFDKpwdT6oJsvLp17FT/PFrcFZgWHptLQGvkcPj3I3noJUgFLAMpteTMgEnCWDQmK3oXi91/aONdWAWbVjwy/hdA4iLwL1BoeYaBmFAeYgjCQIJgYAGz+2aevPex33nMKoCV45vv9kjaPWb6ewyU/qOoKrWoaZT+Z3AGLMBiAqDCSSZYCAtJ1MPWBZzJ97byjrOW9mydRGxSH0ALNaFoJqlNETEHXMPBOkD1jck3L4gREUmiVJFVVvAkfGqG5621Ut+6mr62YsIdeJ6X4IYNbKaK+ErS8SyV0TGzApVmbUdfy0+PTSfDpIyDb0GqumB8/sz0iPLu8x2cyE1QXWUujaMzgsz+szBeK+bFPkueWXmaYWb5QfLfwKO4/VgtOX6PzDxglIMZftco/rN6buIj22UZoTe4uNsoNLI6uhsNLY5bVF2nxBgHAH736NH36gql+a2XvOp3r0+IgXPY4KD0jrqDfiXChyTCwj2rDUYuTVffmp84dWXqCib+v3Fg/7pwU9NmkmE2ZJBGxHyhuF8riPE0zwgojvy56nTlxYY+4cCCJ3d5XaLrN0Nhxhs6PQSuYCMR5AAqL/Qp0j8HVvlEt15za3hAGXoLzrSIv9m5ZmF5+V+o7Zqx74xbAQEBAGAw0g9BnhE+3Hlv2gXQQcfOv49XpyTccMCta33nRDcko0sEJVn0BEAE6AEIRg5bRqn7OKgdC3Vne/az86YsXsXp5W5lw1oWZ0TlAnyelYbEANG6txIEuwAx/q+GdamHf6/+2l/g/R65OeOJJihxALEdI0JismuqlUpKPsXDvj9vP/wFkxlfhvNGP8QAAAABJRU5ErkJggg==',
        name: '干衣机管理平台',
        url: 'https://dryer.slyxxt.com/'
      },
    ]
  },
  {
    title: '其他',
    list: [
      {
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC/klEQVQ4jU2TT2icZRDGn2fe7333+5Jd0oDWQxO2B5EmtCYkgljQQy899SC4HkQURC22ifWgeNBKDCr0YKUm1Yhe1OKhLRb0IoVSEZQimNKIoqcEhYKozcZNs/v9eWc8JMr+TgMz/GBmeIhtCMAAIDm+/BDBpwg8SK1GAKOJ/93Iq4j8qHx/4hr64P/VkS8H/N7mKZoeBZ1HzEFTAwCjkEkNptYD3UJx5cKr+Hmu2BHMCY5Mp6E5+jl8epjdjRKkApYAlB29GRAJOMuGBUX3UvHHLy1caKkAc+pHR95CqB9G3gFqdY8wWDOKA0xBGEgQTAwAtv7q0dce9rvvOQPQEjzz/UFJGycs38jhkh9UdZVWNYxykEzugEUYDEBUGMkkSwEB6dqY/sAzmblx0VHW8+6t06gNiUNogmY0rQTVGSKmoKsbeCfIrjG5oWVxCiIptEqSqirehA/10NjzNqrbd9PXVk3YRbedUvywwa0WUV8JWt6lEtomNujSrMWo6/nZiZkk+PQRkC1oNV8sTJzrfxGeXdnnM5kNqkuspVE0ZvDZn1bmi8XC+CfJc8svM8yuXCq+W3wU95+oBaev0fkHjBIQ429a5R9W701eRut8PTSn9hab5SaWxtbC0eVxywaWaPEmAcAfv/40ffqCqX5rZfdXOtejxSG47HFQukZcQ68d4UKDYfAA1UaiFqerzq1PnTu2/AQTf1+5uXHSOSnosykxmzZJImIvUNwelMVFmmaEFUZ+XXTb8+LCPnHhUBI73a/QcFuhvuscnR+HVjARiPMAFBZ7Fegeg6t9o1quO7X9IQy+BOebRV7s315hZuVdGdg1a52btwEGAgLCYKAZhD4jfLp92LIHpEOIW3+frM5OveGAOdGB3ZfdsIwhHZpk1RMAEaADIBQxaBmt6uWsciAMOMs7n5U/ffEi1q72hQnnXZgdmwf0eVLqFgtA43ZLHOgCzPCPGt6pFg+8/l96+wQ7HLs+6YknKXIIsRwlQWOyZqpXSkk+xuK9P/aP/wtkxlfhkC1diQAAAABJRU5ErkJggg==',
        name: 'sqzls-智慧营收平台',
        url: 'http://sqzls.com:8003/login'
      },
      {
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC/klEQVQ4jU2TT2icZRDGn2fe7333+5Jd0oDWQxO2B5EmtCYkgljQQy899SC4HkQURC22ifWgeNBKDCr0YKUm1Yhe1OKhLRb0IoVSEZQimNKIoqcEhYKozcZNs/v9eWc8JMr+TgMz/GBmeIhtCMAAIDm+/BDBpwg8SK1GAKOJ/93Iq4j8qHx/4hr64P/VkS8H/N7mKZoeBZ1HzEFTAwCjkEkNptYD3UJx5cKr+Hmu2BHMCY5Mp6E5+jl8epjdjRKkApYAlB29GRAJOMuGBUX3UvHHLy1caKkAc+pHR95CqB9G3gFqdY8wWDOKA0xBGEgQTAwAtv7q0dce9rvvOQPQEjzz/UFJGycs38jhkh9UdZVWNYxykEzugEUYDEBUGMkkSwEB6dqY/sAzmblx0VHW8+6t06gNiUNogmY0rQTVGSKmoKsbeCfIrjG5oWVxCiIptEqSqirehA/10NjzNqrbd9PXVk3YRbedUvywwa0WUV8JWt6lEtomNujSrMWo6/nZiZkk+PQRkC1oNV8sTJzrfxGeXdnnM5kNqkuspVE0ZvDZn1bmi8XC+CfJc8svM8yuXCq+W3wU95+oBaev0fkHjBIQ429a5R9W701eRut8PTSn9hab5SaWxtbC0eVxywaWaPEmAcAfv/40ffqCqX5rZfdXOtejxSG47HFQukZcQ68d4UKDYfAA1UaiFqerzq1PnTu2/AQTf1+5uXHSOSnosykxmzZJImIvUNwelMVFmmaEFUZ+XXTb8+LCPnHhUBI73a/QcFuhvuscnR+HVjARiPMAFBZ7Fegeg6t9o1quO7X9IQy+BOebRV7s315hZuVdGdg1a52btwEGAgLCYKAZhD4jfLp92LIHpEOIW3+frM5OveGAOdGB3ZfdsIwhHZpk1RMAEaADIBQxaBmt6uWsciAMOMs7n5U/ffEi1q72hQnnXZgdmwf0eVLqFgtA43ZLHOgCzPCPGt6pFg+8/l96+wQ7HLs+6YknKXIIsRwlQWOyZqpXSkk+xuK9P/aP/wtkxlfhkC1diQAAAABJRU5ErkJggg==',
        name: 'hbgy-智慧营收平台',
        url: 'http://hbgy.hnsilian.cn:8082/login'
      },
      {
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACt0lEQVQ4jU2SO2xcRRSGvzP3em3vrhOHh0mIieJEiJAWEBKioAAsgQggQBQgagoKaNLinoaKgoYCKYUlEBVCCPEoEAWKEODYa8tBDuvdYF7G3vXq3r0z509xNxLTnDPF0fznm88kdYFFIAEBMAAJmcluX+H/PQ5kwG4AFiVwr4ev/lTwzXcjzLD1TsXqpwMAW98Y88lndQ8ESQCLSErurrrK9/aiP7G86xubpVeVfPmFnn/51ZHHKH/quZ5//e3IJXmMSZJSDpiZIWFmWK9fceKEsbCQsX29ZHbGuPhgg85WyVzbOLeUAcjM6jSSPCaXJL+2UejVN/ra6JTq9Su9/Fpfv14r1OtXeuX1vtbWC0mSu1z18QAgF4CtrY/5d985c1/Obr+iuxs5Nhfo7lb0+pFWM5CSACEJCbKVlZV3rc6jixcatnOj4uZe4pmn2+S58fNayUvPzwHQ2Rzz6COzE4711ISmAChL0WwGtq9XDAYJd9G/GdnfTywsZHS2xuzcGGMG7nWK3MyI0clz48erBe+9v0+rGTh5T8YHHx7S7UWWzk5xZXXI9z8ULJ7OufzOHdQPB3JN8AN2cJiYaweazcAfe5F2OzB/PPDXn4lGDnfdmTEc1rxCMCQR3CEE+PyLI11ZHTLdMGIUW9sVRelkGWxsVRwOxcy08ctayUcfHyolmDAAM+O3nYqDAxEyA8AdatmMlIS8HkgOO7/HyW9AyLIayFtvzvPipSZF4WSZcepkRmOqjrlwd8bMjDGu4OyZnMtvzzM9bUgQzEw+8eD+8w2NRqgo0OLpKcVoGgyk80sNhcz034Hr3lO5Wq1gKQkzUw6EGghceKBhDz/UwAwuPduisznm+DFYfnKWv/9JDAaJxx+b5fbaZgQkdSdaRslVlsmLona7qtxHo4nn7n50FF21xXFSu7cAm4zMfzIqU/wAAAAASUVORK5CYII=',
        name: '智慧供热管理平台',
        url: 'http://81.71.96.190:8093/login'
      },
      {
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACq0lEQVQ4jaWTPW9cZRCFn3nf9969++G7aza7/iCOkwCGoACWQBRGFCiuaKFAlIlEzz/gH/APUiaUFIjOHQIFIYgwiZ2NBErW3mS3iPfbd/fe+w6NHRm3HGmko6M5M8XMsfwXBtAzfAEoAOk5/ZQj58w+ilbWmxc3bwal6g2xwSUAzdOn6XSw0zu4fztJnj057T07wAB+afXDL+Olt74tVJpN5OwiAfXMxr3esLv/dbfz651Tjz0ZokurW1/UXr1+J6xcKKN+rpqC96BeIfNA5opxHBarnzmiR5NRexcQCxDVrqw3Vt/7oVBpFNTP8ySZO2OsiBFRVKw1Alj1WW7CilgbbE9no++ypN83APX6xq0oXq75LM3SNLfXNtYohA5VFeesTKYzJtMEVSw+zaJ4qVavb9wCcICJSovbGKNpmplPPnoHRXnz9RV52DrU+TzltcvLUqtW9Jff9hDEOBtqVFq8AXxjgIoJgovzNOXda5fkee+Ffv/jPR62DnW5UZXpdCblUqT9wZhPt9/X+SwXVY+4YA2oOACfexaKBTrdIw47RzTqMfutA5w1rK81+P3PvxmOJqDwweZV/virjZwc0ABj9VlbADz6xtUVuVCPWVwsy16rrQ/22zqbzaVcjth7fCCAXn/7MurTNjB2gJ+N+zvS1C2M8YiYleYr1KoltdZImmbk3qsxhjzzdHpHvtsb2uPhix3AC0AturJe39i6HywsV/M0yb1X66ylWApZqBQREabThNE4yVUCm0+6g8PWz5tJ8s8TC0iS9fuhrTwtlqufF8qxcdam1iBpljMcHzOeHGuek7kwCnQ+kOHzRzcHR7s/vXwkwExGB7sW99i66GMXVmKMM8ZYCYJAnAuNiNjZqNsbPHvwVbdz7+5pqP53mM7DnOPxSZ3XX+Jf8JpBfdJKnDMAAAAASUVORK5CYII=',
        name: '殡葬管理平台',
        url: 'http://139.9.87.56:8188/login'
      },
      {
        img: '',
        name: '',
        url: ''
      }
    ]
  },
])


onMounted(()=>{
  const loginFlag = window.localStorage.getItem('isLogin') || false
  if(loginFlag) isLogin.value = true
})

</script>

<style scoped lang="scss">
.home-page {
  position: relative;
  padding: 15px;

  // 未启用
  .lists {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .list {
      .item {
        display: flex;
        align-items: center;
        gap: 2px;
        padding: 10px;
        background-color: white;
        border: 1px solid var(--vp-c-gutter);
      }
    }

    img {
      width: 20px;
      height: 20px;
    }
  }
}

.form {
  margin: auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-gutter);
  background-color: var(--vp-sidebar-bg-color);

  .form-item {
    display: flex;

    label {
      line-height: 40px;
      display: inline-block;
      width: 80px;
    }

    input {
      width: 100%;
      padding: 5px 10px;
      border-radius: 3px;
      border: 1px solid var(--vp-c-gutter);
      &:focus{
        border: 1px solid var(--vp-c-brand-lighter);
      }
    }

    button {
      width: 100%;
      padding: 5px 15px;
      border-radius: 3px;
      // color: white;
      letter-spacing: 5px;
      background-color: var(--vp-button-alt-bg);
    }
  }

  .required {
    label {
      &::before {
        content: '*';
        display: inline-block;
        color: red;
        width: 10px;
        transform: translateY(2px);
      }
    }
  }
}

.project-titles-box {
  margin-bottom: 20px;

  .project-titles {
    margin-top: 10px;
    display: flex;
    gap: 10px;

    a {
      display: inline-block;
    }
  }
}
</style>