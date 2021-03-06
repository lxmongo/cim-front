import type { LockInfo } from '/#/store';

import { defineStore } from 'pinia';

import { LOCK_INFO_KEY } from '/@/enums/cacheEnum';
import { Persistent } from '/@/utils/cache/persistent';
import { ErrorMessageMode } from '/#/axios';
import { deleteRouteApi, saveOrUpdateRouteApi } from '/@/api/sys/menulist/model';
import { RouteItem, getMenuListResultModel } from '/@/api/sys/model/menuModel';
interface LockState {
  lockInfo: Nullable<LockInfo>;
}

export const useMenuStore = defineStore({
  id: 'menu',
  state: (): LockState => ({
    lockInfo: Persistent.getLocal(LOCK_INFO_KEY),
  }),
  getters: {},
  actions: {
    async saveOrUpdateRoute(
      params: RouteItem & {
        mode?: ErrorMessageMode;
      },
    ): Promise<getMenuListResultModel | null> {
      try {
        const { ...menuParams } = params;
        const data = await saveOrUpdateRouteApi(menuParams);
        return data;
      } catch (error) {
        return null;
      }
    },
    async deleteRoute(
      params: number[] & {
        mode?: ErrorMessageMode;
      },
    ): Promise<getMenuListResultModel | null> {
      try {
        const data = await deleteRouteApi(params);
        return data;
      } catch (error) {
        return null;
      }
    },
  },
});
