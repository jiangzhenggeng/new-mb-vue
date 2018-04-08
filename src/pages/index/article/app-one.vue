<template>
  <div class="content-wrap ft">
    <page-header curr="article"/>
    <div class="mian-stream">
      <load-data-limit
        url="/api/article/ArticleList"
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
				listcache: false
			}
		},
		computed: {
			extData() {
				let id = ''
				if (this.$route.params[0] && this.$route.params[0].match(/\d+/)) {
					id = this.$route.params[0].match(/\d+/)[0]
				}
				return {
					type: 4,
					id
				}
			}
		},
		created() {
			if (!this.extData.id) {
				window.history.back()
			}
		},
		components: {
			pageHeader,
			LargCard,
			loadDataLimit
		},
		methods: {}
	}
</script>


