import Constants from "@/util/constants";

export const doSetting = async () => {

    let data: Record<string, any> | undefined = undefined;

    const res = await fetch(Basic('/blog/setting'));

    if (res.ok) {

        const response: API.Response<Record<string, any>> = await res.json();

        if (response.code == Constants.Success) {

            data = response.data;
        }
    }

    return data;
};

export const doCategories = async () => {

    let data: API.Categories[] | undefined = undefined;

    const res = await fetch(Basic('/blog/categories'))

    if (res.ok) {

        const response: API.Response<API.Categories[]> = await res.json();

        if (response.code == Constants.Success) {

            data = response.data;
        }
    }

    return data;
};

export const doCategory = async (id: string) => {

    let data: API.Category | undefined = undefined;

    const res = await fetch(Basic(`/blog/categories/${id}`));

    if (res.ok) {

        const response: API.Response<API.Category> = await res.json();

        if (response.code == Constants.Success) {

            data = response.data;
        }
    }

    return data;
};

export const doLinks = async () => {

    let data: API.Linkers[] | undefined = undefined;

    const res = await fetch(Basic('/blog/links'));

    if (res.ok) {

        const response: API.Response<API.Linkers[]> = await res.json();

        if (response.code == Constants.Success) {

            data = response.data;
        }
    }

    return data;
};

export const doArticles = async ({categories, page}: { categories?: string[]; page?: number }) => {

    const params = new URLSearchParams();

    if (categories) {
        categories.forEach(item => {
            params.append('categories', item)
        })
    }

    if (page) {
        params.set('page', page.toString());
    }

    let url = Basic('/blog/articles');

    if (params.toString()) {
        url = url + "?" + params.toString();
    }

    let data: API.Paginate<API.Articles> = {page: 0, size: 0, total: 0};

    const res = await fetch(url);

    if (res.ok) {

        const response: API.Response<API.Paginate<API.Articles>> = await res.json();

        if (response.code == Constants.Success && response.data) {

            data = {
                size: response.data?.size,
                page: response.data?.page,
                total: response.data?.total,
                data: response.data?.data,
            };
        }
    }

    return data;
};

export const doArticle = async (id: string) => {
    let data: API.Article | undefined = undefined;
    const res = await fetch(Basic(`/blog/articles/${id}`));
    if (res.ok) {
        const response: API.Response<API.Article> = await res.json();
        if (response.code == Constants.Success) {
            data = response.data;
        }
    }
    return data;
};

export const doSearch = async ({keyword, page}: { keyword?: string; page?: number }) => {

    const params = new URLSearchParams();

    if (keyword) {
        params.set('keyword', keyword)
    }

    if (page) {
        params.set('page', page.toString());
    }

    let url = Basic('/blog/search');

    if (params.toString()) {
        url = url + "?" + params.toString();
    }

    let data: API.Paginate<API.Articles> = {page: 0, size: 0, total: 0};

    const res = await fetch(url, {cache: "no-cache"});

    if (res.ok) {

        const response: API.Response<API.Paginate<API.Articles>> = await res.json();

        if (response.code == Constants.Success && response.data) {

            data = {
                size: response.data?.size,
                page: response.data?.page,
                total: response.data?.total,
                data: response.data?.data,
            };
        }
    }

    return data;
};

export const Basic = (uri: string) => {

    let domain = process.env.DOMAIN;

    if (!domain) {
        domain = process.env.NEXT_PUBLIC_DOMAIN;
    }

    return domain + uri;
}