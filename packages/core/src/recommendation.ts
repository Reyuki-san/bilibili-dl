import {fetchAPI} from '@bilibili-dl/util';
import {
    getGatewayURL,
    SupportedLocales,
} from '@bilibili-dl/config/constants.js';
import {IRecommendAPI, RecommendedData} from '@bilibili-dl/interfaces/api';

/**
 * Get list of recommendation videos.
 * @param {SupportedLocales} locale Supported Locales.
 * @param {number} pn Index Pagination Number.
 * @return {Promise<RecommendationContent[]>}
 */
export const getRecommendList = async (
    locale: SupportedLocales = 'en_US',
    pn: number,
): Promise<RecommendedData> => {
    const response = await fetchAPI
        .get(getGatewayURL('v2').concat('home/recommend'), {
            searchParams: {
                platform: 'web',
                s_locale: locale,
                pn,
                ps: pn === 1 ? 50 : 20,
            },
            headers: {
                Referer: 'https://www.bilibili.tv/'.concat(
                    locale.split('_')?.at(0)!,
                ),
                Origin: 'https://www.bilibili.tv',
                Cookie: process.env.BILI_COOKIE ?? '',
            },
        })
        .json<IRecommendAPI>();

    return response.data;
};
