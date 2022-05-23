import messagesENGB from './en-gb/messages.json'
import messagesPTBR from './pt-br/messages.json'
import messagesES from './es/messages.json'
import messagesZH from './zh/messages.json'

export type PossibleLanguages = 'zh' | 'pt-br' | 'es' | 'en-gb'

interface MessagesProps {
    [key: string]: string
}

const localeMessages = {
    'pt-br': messagesPTBR as MessagesProps,
    'en-gb': messagesENGB as MessagesProps,
    es: messagesES as MessagesProps,
    zh: messagesZH as MessagesProps,
}

export { localeMessages }
