
import { getProductById } from "@/modules/products/actions";
import { useQuery } from "@tanstack/vue-query";
import { defineComponent, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useForm } from 'vee-validate';
import * as yup from 'yup'



const validationSchema = yup.object({
    title: yup.string().required().min(2),
    slug: yup.string().required(),
    description: yup.string().required(),
    price: yup.string().required(),
    stock: yup.string().required().min(1),
    gender: yup.string().required().oneOf(['men','woman','kid']),
  });

export default defineComponent({
    props:{
        productId: {
            type: String,
            required: true
        }
    },
    
    
    setup( props ){

        const router = useRouter()

        const {data: product,isError,isLoading} = useQuery({
            queryKey: ['product',props.productId ],
            queryFn: () => getProductById( props.productId),
            retry:false
        })

        const { values,defineField,errors } = useForm({
            validationSchema, //validationSchema: validationSchema, le pusimos el mismo nombre xd
        });

        const [title, titleAttrs] = defineField('tittle');
        const [slug, slugAttrs] = defineField('slug');
        const [description, descriptionAttrs] = defineField('description');
        const [price, priceAttrs] = defineField('price');
        const [stock, stockAttrs] = defineField('stock');
        const [gender, genderAttrs] = defineField('gender');



        
        watchEffect(()=>{
            if(isError.value && !isLoading.value){
                router.replace('/admin/products')
                return
            }


        })
        return{
            //properties
            values,
            errors,
            title, titleAttrs,
            slug, slugAttrs,
            description, descriptionAttrs,
            price, priceAttrs,
            stock, stockAttrs,
            gender, genderAttrs,


            //getters
            allsizes: [ 'XS','S','M','L','XL','XXL']


            //actions
        }
    }
})