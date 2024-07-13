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

interface NavSideMobile {
    open: boolean
}

interface Markdown {
    content: string
}

interface JobSearchCardProps {
    logo: string
    role: string
    company: string
    posted: string
    liked: boolean
    brief: string
    description: string
}

interface VerticalTabsProp {
    id: string
    label: string
    content: React.ReactNode
}

interface VerticalTabsprops {
    tabs: VerticalTabsProp[]

}


interface MutliSelectProps {
    value: string[];
    disabled: boolean
    optionLabel: string;
    placeholder?: string;
    options: { label: string; value: string }[];
    onChange: (event: { value: string[] }) => void;
}