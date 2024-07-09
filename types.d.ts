interface User_Token {
    access_tokens: string;
}

interface SidebarLinksProps {
    icon: any
    href: string
    writing: string
    iconOnly: boolean
}

interface ClientHelper {
    path: string;
    data?: object;
    method: string;
    token?: string;
    queryParams?: any;
    tokenType?: string;
    contentType?: string;
}


interface Popover {
    icon?: any
    actionName: string
    children: React.ReactNode
}