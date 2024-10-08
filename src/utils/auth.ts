import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

// 获取 Token
export function getToken(): string | undefined {
    return Cookies.get(TokenKey)
}

// 设置 Token
export function setToken(token: string, options?: Cookies.CookieAttributes): string {
    return Cookies.set(TokenKey, token, options) as any
}

// 移除 Token
export function removeToken(): void {
    Cookies.remove(TokenKey)
}
