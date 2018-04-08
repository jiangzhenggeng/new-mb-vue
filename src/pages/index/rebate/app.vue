<template>
  <div class="content-wrap ft">
    <page-header curr="rebate"/>
    <div class="mian-stream">
      <load-data-limit
        url="/api/article/GetArticleList"
        :cache="listcache"
        :extData="extData"
      >
        <template slot="item" slot-scope="props">
          <small-card :item="props.item"/>
        </template>
      </load-data-limit>
    </div>
  </div>
</template>

<script>
	import loadDataLimit from '@/components/loadDataLimit.vue'
	import SmallCard from '@/components/card/card.vue'
	import pageHeader from '@/components/header.vue'

	export default {
		data() {
			return {
				listcache: process.env.NODE_ENV == 'production' ? true : false,
				extData: {
					type: 2,
				}
			}
		},
		components: {
			pageHeader,
			SmallCard,
			loadDataLimit
		}
	}
</script>


