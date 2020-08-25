import {
  request
} from './request';
export function getDetail(iid) {
  return request({
    method: 'GET',
    url: '/detail',
    params: {
      iid
    }
  })
}
