// import { onMounted, ref } from 'vue';
// import { getBannerAPI } from '@/api/home.ts';
// import { BannerResult } from '@/api/model/homeModel.ts';
// export function useBanner() {
//   const bannerList = ref([] as BannerResult[]);
//   const getBanner = async () => {
//     const res = await getBannerAPI({ distributionSite: '2' });
//     bannerList.value = res.result;
//   };
//   onMounted(() => getBanner());

//   return { bannerList };
// }

改进思路：
1.给useBanner函数接收一些配置参数，像分发站点，请求的参数等提高函数使用的灵活性


import { onMounted, ref } from 'vue';
import { getBannerAPI } from '@/api/home.ts';
import { BannerResult } from '@/api/model/homeModel.ts';

export function useBanner(distributionSite = '2') {
    const bannerList = ref([] as BannerResult[]);

    const getBanner = async () => {
        const res = await getBannerAPI({ distributionSite });
        bannerList.value = res.result;
    };

    onMounted(() => getBanner());

    return { bannerList };
}
