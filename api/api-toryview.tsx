import { notLoginedApi } from './api-base';

export const dataApi = {
  getUserData: (Data: any) => notLoginedApi.post('/toryview/getUserData', Data),
  getStoryData: (Data: any) =>
    notLoginedApi.post('/toryview/getStoryData', Data),
  getPostData: (Data: any) => notLoginedApi.post('/toryview/getPostData', Data),
  getMediaByUrl: (Data: any) =>
    notLoginedApi.post('/toryview/getMediaByUrl', Data),
  getRecommendCount: (Data: any) =>
    notLoginedApi.post('/toryview/getRecommendCount', Data),
  recommendCount: (Data: any) =>
    notLoginedApi.post('/toryview/recommendCount', Data),
};
