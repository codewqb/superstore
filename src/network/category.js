import {
  request
} from './request';
export function getCategory() {
  return request({
    method: 'GET',
    url: '/category'
  })
}
