<template>
  <div class="content-wrap ft">
    <page-header curr="event" />
    <div class="mian-stream">
      <load-data-limit
        url="/api/event/mbevent"
        :cache="listcache"
      >
        <template slot="item" slot-scope="props">
          <list-card :item="props.item"/>
        </template>
      </load-data-limit>
    </div>
  </div>
</template>

<script>
	import loadDataLimit from '@/components/loadDataLimit.vue'
	import pageHeader from '@/components/header'
	import ListCard from './components/list-card.vue'

	export default {
		data() {
			return {
				listcache: process.env.NODE_ENV == 'production' ? true : false
			}
		},
		components: {
			pageHeader,
			ListCard,
			loadDataLimit
		}
	}
</script>

