export const transformLanguage = (language,content) => {
    let returnLanguage = '';
    switch (language) {
        case 'zh-CN':
            returnLanguage = content.chinese;
            break;
        case 'en-US':
            returnLanguage = content.english;
            break;
        default:
            returnLanguage = content.chinese;
            break;
    }
    return returnLanguage;
}