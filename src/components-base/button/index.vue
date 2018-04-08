<style lang="scss">
  @import "../_functions.scss";

  $jui-button__box-shadow: 6.5;

  .jui-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    white-space: nowrap;
    user-select: none;
    border: 1px solid transparent;
    padding: px2rem(15) px2rem(20);
    font-size: px2rem(28);
    line-height: 1.5;
    border-radius: px2rem(8);
    transition: all .15s ease-in-out;
    outline: 0;

    &.is-disabled,
    &.is-disabled:focus,
    &.is-disabled:hover {
      cursor: not-allowed;
      opacity: 0.5;
    }

    &.is-round {
      border-radius: px2rem(50);
      padding-left: px2rem(34);
      padding-right: px2rem(34);
    }

    &.is-circle {
      border-radius: 50%;
      padding: px2rem(24);
    }

  }

  .jui-button--default {
    background-color: #6c757d;
    border-color: #6c757d;
    color: #fff;
    &:focus {
      box-shadow: 0 0 0 px2rem($jui-button__box-shadow) rgba(108, 117, 125, .5);
    }
    &.is-plain {
      background: transparent;
      color: #6c757d;
    }
  }

  .jui-button--gray {
    background-color: #6c757d;
    border-color: #6c757d;
    color: #fff;
    &:focus {
      box-shadow: 0 0 0 px2rem($jui-button__box-shadow) rgba(108, 117, 125, .5);
    }

    &.is-plain {
      background: transparent;
      color: #6c757d;
    }
  }

  .jui-button--primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    &:focus {
      box-shadow: 0 0 0 px2rem($jui-button__box-shadow) rgba(0, 123, 255, .5);
    }

    &.is-plain {
      background: transparent;
      color: #007bff;
    }
  }

  .jui-button--green {
    color: #fff;
    background-color: green;
    border-color: green;
    &:focus {
      box-shadow: 0 0 0 px2rem($jui-button__box-shadow) rgba(0, 128, 0, .5);
    }

    &.is-plain {
      background: transparent;
      color: green;
    }
  }

  .jui-button--red {
    color: #fff;
    background-color: red;
    border-color: red;
    &:focus {
      box-shadow: 0 0 0 px2rem($jui-button__box-shadow) rgba(255, 0, 0, .5);
    }

    &.is-plain {
      background: transparent;
      color: red;
    }
  }


</style>
<template>
  <button
    @click="handleClick"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      'jui-button',
      type ? 'jui-button--' + type : '',
      buttonSize ? 'jui-button--' + buttonSize : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-circle': circle,
        'is-round': round
      }
    ]"
  >
    <i class="jui-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
	export default {
		name: 'CustomButton',

		inject: {
			CustomFormItem: {
				default: ''
			}
		},

		props: {
			type: {
				type: String,
				default: 'default'
			},
			size: String,
			icon: {
				type: String,
				default: ''
			},
			nativeType: {
				type: String,
				default: 'button'
			},
			loading: Boolean,
			disabled: Boolean,
			plain: Boolean,
			circle: Boolean,
			autofocus: Boolean,
			round: Boolean
		},

		computed: {
			_elFormItemSize() {
				return (this.CustomFormItem || {}).elFormItemSize;
			},
			buttonSize() {
				return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
			}
		},

		methods: {
			handleClick(evt) {
				this.$emit('click', evt);
			}
		}
	};
</script>
