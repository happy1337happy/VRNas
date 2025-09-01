<template>
    <button @click="handleClick" class="main-btn" :class="className">
        <slot>
            <img v-if="$props.icon" :src="useImageLoader(`@/assets/img/${$props.icon}`)" alt="icon" class="btn-icon">
        </slot>
        <span v-if="$props.text">{{ text }}</span>
    </button>
</template>
    
<script setup>
    import { computed, handleError } from 'vue';
    import { useRouter } from 'vue-router';
    import { useImageLoader } from '../../composables/useImageLoader';

    const props = defineProps ({
        icon:{
            type:String,
            default:null,
        },
        text:{
            type:String,
            default:null,
        },
        variant:{
            type:String,
            default: 'transparent',
            validator:(prop)=>['transparent','gradient'],
        },
        noneUppercase:{
            type:Boolean,
            default:false,
        },
        size:{
            type:String,
            default:'lg',
            validator:(prop)=>['sm','md','lg','xlg','super']
        },
        fontSize:{
            type:String,
            default:'md',
            validator:(prop)=>['md','lg']
        },
        fontWeight:{
            type:String,
            default:'700',
            validator:(prop)=>['700','300']
        },
        isActive:{
            type:Boolean,
            default: false,
        },
        to:{
            type:[String, Object],
            default: null,
        },
    })

    const router = useRouter();

    const handleClick = () =>{
        if (props.to) {
            router.push(props.to);
        }
    };

    const className = computed(()=>{
        return [
            'size-'+props.size,
            'font-size-'+props.fontSize,
            'font-weight-'+props.fontWeight,
            'variant-'+props.variant,
            {
                'none-uppercase':props.noneUppercase,
                'active': props.isActive,
            }
        ]
    })
</script>

<style lang="scss">
@use '@/assets/styles/variables.scss' as *;
    .main-btn{
        text-transform: uppercase;
        position: relative;
        overflow: hidden;
        transition: color 0.3s ease;
        color: $white;
        white-space: nowrap;
        z-index: 0;
        &.variant-transparent{
            background-color: rgba(255, 255, 255, 0.06);
            border: 1px solid;
            border-image: $main-gradient 1;
            &::before{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: $main-gradient;
                opacity: 0;
                transition: opacity .3s ease;
                z-index: -1;
            }
            &:hover::before {
                opacity: 1;
            }
        }
        &.variant-gradient{
            background-image: $main-gradient;
            box-shadow: 0 0 0 transparent;
            transition: box-shadow .3s ease;
            &:hover{
                box-shadow: 0 4px 15px rgba($color-blue, 0.5), 0 0 10px rgba($color-purple, 0.5);
            }
        }
        &.none-uppercase{
            text-transform: none;
        }
        &.size-sm{
            padding: 15px 13.3px;
        }
        &.size-md{
            padding: 12px 24px;
        }
        &.size-lg{
            padding: 18px 38px;
        }
        &.size-xlg{
            padding: 18.7px 16.6px;
        }
        &.size-super{
            width: 100%;
            padding: 20px 20px;
        }
        &.font-size-md {
            font-size: 14px; 
            line-height: 14px; 
        }
        &.font-size-lg {
            font-size: 16px; 
            line-height: 28px; 
        }
        &.font-weight-300 { 
            font-weight: 300;
        }
        &.font-weight-700 {
            font-weight: 700; 
        }
    }
</style>