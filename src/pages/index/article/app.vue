<template>
  <div class="content-wrap ft">
    <page-header curr="article"/>
    <div class="mian-stream">
      <load-data-limit
        url="/api/article/GetBlogLists"
        :cache="listcache"
        :extData="extData"
      >
        <template slot="item" slot-scope="props">
          <larg-card
            :item="props.item"
            :tag="false"
            :productName="true"
          />
        </template>
      </load-data-limit>
    </div>
  </div>
</template>

<script>
	import loadDataLimit from '@/components/loadDataLimit.vue'
	import LargCard from '@/components/card/large.vue'
	import pageHeader from '@/components/header'

	export default {
		data() {
			return {
				listcache: process.env.NODE_ENV == 'production' ? true : false,
				extData: {
					type: 4,
				}
			}
		},
		components: {
			pageHeader,
			LargCard,
			loadDataLimit
		}
	}
</script>

