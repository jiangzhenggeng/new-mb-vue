<style lang="scss">
  @import "../_functions.scss";

  $jui-input__border-radius: 8;
  $jui-input__border-cloor: #ced4da;
  $jui-input__inner-padding-left: 20;

  .jui-input,
  .jui-textarea {
    position: relative;
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    border: 1px solid $jui-input__border-cloor;
    border-radius: px2rem($jui-input__border-radius);
  }

  .is-disabled {
    .jui-input__inner,
    .jui-textarea__inner {
      background-color: #f5f7fa;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }

  .jui-input--prefix {
    .jui-input__inner {
      padding-left: px2rem($jui-input__inner-padding-left + 50);
    }
  }

  .jui-input--suffix {
    .jui-input__inner {
      padding-right: px2rem($jui-input__inner-padding-left + 50);
    }
  }

  .jui-input-group--prepend {
    .jui-input__inner {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  .jui-input-group--append {
    .jui-input__inner {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  .jui-input__inner,
  .jui-textarea__inner {
    resize: none;
    border-radius: px2rem($jui-input__border-radius);
    border: none;
    display: block;
    width: 100%;
    padding: px2rem(15) px2rem($jui-input__inner-padding-left);
    font-size: px2rem(28);
    line-height: 1.5;
    color: #495057;
    background-color: transparent;
    background-clip: padding-box;
    outline: 0;
    z-index: 1;
    position: relative;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    &:focus {
      border-color: #80bdff;
      box-shadow: 0 0 0 px2rem(8) rgba(0, 123, 255, .25);
    }
  }

  .jui-input__prefix,
  .jui-input__suffix {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all .3s;
    color: #c0c4cc;
    pointer-events: none;
    width: px2rem(50);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .jui-input__prefix {
    left: px2rem(10);
  }

  .jui-input__suffix {
    right: px2rem(10);
  }

  .jui-input-group__prepend,
  .jui-input-group__append {
    flex-grow: 0;
    flex-shrink: 0;
    flex-wrap: wrap;

    background-color: #e9ecef;
    color: #909399;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: px2rem(15) px2rem(20);
  }

  .jui-input-group__prepend {
    border-right: 1px solid $jui-input__border-cloor;
    border-top-left-radius: px2rem($jui-input__border-radius);
    border-bottom-left-radius: px2rem($jui-input__border-radius);
  }

  .jui-input-group__append {
    border-left: 1px solid $jui-input__border-cloor;
    border-top-right-radius: px2rem($jui-input__border-radius);
    border-bottom-right-radius: px2rem($jui-input__border-radius);
  }


</style>
<template>
  <div :class="[
    type === 'textarea' ? 'jui-textarea' : 'jui-input',
    inputSize ? 'jui-input--' + inputSize : '',
    {
      'is-disabled': inputDisabled,
      'jui-input-group': $slots.prepend || $slots.append,
      'jui-input-group--append': $slots.append,
      'jui-input-group--prepend': $slots.prepend,
      'jui-input--prefix': $slots.prefix || prefixIcon,
      'jui-input--suffix': $slots.suffix || suffixIcon
    }
    ]"
       @mouseenter="hovering = true"
       @mouseleave="hovering = false"
  >
    <template v-if="type !== 'textarea'">
      <!-- 前置元素 -->
      <div class="jui-input-group__prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <!-- 前置内容 -->
      <span class="jui-input__prefix" v-if="$slots.prefix || prefixIcon" :style="prefixOffset">
        <slot name="prefix"></slot>
        <i class="jui-input__icon"
           v-if="prefixIcon"
           :class="prefixIcon">
        </i>
      </span>
      <input
        :tabindex="tabindex"
        v-if="type !== 'textarea'"
        class="jui-input__inner"
        v-bind="$props"
        :disabled="inputDisabled"
        :autocomplete="autoComplete"
        :value="currentValue"
        ref="input"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        :aria-label="label"
      >
      <!-- 后置内容 -->
      <span
        class="jui-input__suffix"
        v-if="$slots.suffix || suffixIcon || showClear || validateState && needStatusIcon"
        :style="suffixOffset">
        <span class="jui-input__suffix-inner">
          <template v-if="!showClear">
            <slot name="suffix"></slot>
            <i class="jui-input__icon"
               v-if="suffixIcon"
               :class="suffixIcon">
            </i>
          </template>
          <i v-else
             class="jui-input__icon jui-icon-circle-close jui-input__clear"
             @click="clear"
          ></i>
        </span>
        <i class="jui-input__icon"
           v-if="validateState"
           :class="['jui-input__validateIcon', validateIcon]">
        </i>
      </span>
      <!-- 后置元素 -->
      <div class="jui-input-group__append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
    </template>
    <textarea
      v-else
      :tabindex="tabindex"
      class="jui-textarea__inner"
      :value="currentValue"
      @input="handleInput"
      ref="textarea"
      v-bind="$props"
      :disabled="inputDisabled"
      :style="textareaStyle"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      :aria-label="label"
    ></textarea>
  </div>
</template>
<script>
	import emitter from '../../common/event-emitter'
	import merge from '../../common/merge'

	export default {
		name: 'CustomInput',

		componentName: 'CustomInput',

		mixins: [emitter],

		inject: {
			CustomForm: {
				default: ''
			},
			CustomFormItem: {
				default: ''
			}
		},

		data() {
			return {
				currentValue: this.value,
				textareaCalcStyle: {},
				prefixOffset: null,
				suffixOffset: null,
				hovering: false,
				focused: false
			};
		},

		props: {
			value: [String, Number],
			placeholder: String,
			size: String,
			resize: String,
			name: String,
			form: String,
			id: String,
			maxlength: Number,
			minlength: Number,
			readonly: Boolean,
			autofocus: Boolean,
			disabled: Boolean,
			type: {
				type: String,
				default: 'text'
			},
			autosize: {
				type: [Boolean, Object],
				default: false
			},
			rows: {
				type: Number,
				default: 2
			},
			autoComplete: {
				type: String,
				default: 'off'
			},
			max: {},
			min: {},
			step: {},
			validateEvent: {
				type: Boolean,
				default: true
			},
			suffixIcon: String,
			prefixIcon: String,
			label: String,
			clearable: {
				type: Boolean,
				default: false
			},
			tabindex: String
		},

		computed: {
			_elFormItemSize() {
				return (this.CustomFormItem || {}).elFormItemSize;
			},
			validateState() {
				return this.CustomFormItem ? this.CustomFormItem.validateState : '';
			},
			needStatusIcon() {
				return this.CustomForm ? this.CustomForm.statusIcon : false;
			},
			validateIcon() {
				return {
					validating: 'jui-icon-loading',
					success: 'jui-icon-circle-check',
					error: 'jui-icon-circle-close'
				}[this.validateState];
			},
			textareaStyle() {
				return merge({}, this.textareaCalcStyle, {resize: this.resize});
			},
			inputSize() {
				return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
			},
			inputDisabled() {
				return this.disabled || (this.CustomForm || {}).disabled;
			},
			showClear() {
				return this.clearable && this.currentValue !== '' && (this.focused || this.hovering);
			}
		},

		watch: {
			'value'(val) {
				this.setCurrentValue(val);
			}
		},

		methods: {
			focus() {
				(this.$refs.input || this.$refs.textarea).focus();
			},
			handleBlur(event) {
				this.focused = false;
				this.$emit('blur', event);
				if (this.validateEvent) {
					this.dispatch('ElFormItem', 'el.form.blur', [this.currentValue]);
				}
			},
			inputSelect() {
				(this.$refs.input || this.$refs.textarea).select();
			},
			handleFocus(event) {
				this.focused = true;
				this.$emit('focus', event);
			},
			handleInput(event) {
				const value = event.target.value;
				this.$emit('input', value);
				this.setCurrentValue(value);
			},
			handleChange(event) {
				this.$emit('change', event.target.value);
			},
			setCurrentValue(value) {
				if (value === this.currentValue) return;
				this.currentValue = value;
				if (this.validateEvent) {
					this.dispatch('CustomFormItem', 'el.form.change', [value]);
				}
			},
			clear() {
				this.$emit('input', '');
				this.$emit('change', '');
				this.$emit('clear');
				this.setCurrentValue('');
				this.focus();
			}
		},

		created() {
			this.$on('inputSelect', this.inputSelect);
		},

	}
</script>
