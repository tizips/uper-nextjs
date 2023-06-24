declare namespace API {

    type doSetting = {
        name?: string;
        url?: string;
        analyse?: string;
        copyright?: string;
        icp?: string;
        police?: string;
        signature?: string;
        close?: number;
    }

    type Linkers = {
        id?: number;
        name?: string;
        logo?: string;
        uri?: string;
    }

    type Categories = {
        id?: string;
        type?: 'list' | 'page' | 'parent';
        name?: string;
        children?: Categories[];
    }

    type Category = {
        id?: string;
        type?: 'list' | 'page';
        name?: string;
        picture?: string;
        title?: string;
        keyword?: string;
        description?: string;
        is_comment?: number;
        is_enable?: number;
        html?: string;
        created_at?: string;
    }

    type Articles = {
        id: string;
        name: string;
        category: string;
        author?: string;
        summary: string;
        created_at: string;
    }

    type Article = {
        id?: string;
        name?: string;
        category?: string;
        // author_name?: string;
        // author_avatar?: string;
        // author_signature?: string;
        picture?: string;
        title?: string;
        keyword?: string;
        description?: string;
        source?: string;
        url?: string;
        html?: string;
        is_comment?: number;
        created_at?: string;
    }

    type Response<T> = {
        code: number;
        data?: T;
        message: string;
    }

    type Paginate<T> = {
        data?: T[];
        total: number;
        size: number;
        page: number;
    }

    type Swr<T> = {
        data?: T;
        loading?: boolean;
        error?: any;
    }
}