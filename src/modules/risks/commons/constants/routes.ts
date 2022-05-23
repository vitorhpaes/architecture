// const USER_PREFIX = '/user'
const UNIT_PREFIX = '/units'
// const TASK_PREFIX = '/tasks'
// const SEARCH_PREFIX = '/search'

export const UNIT = {
    LIST: UNIT_PREFIX,
    CONFIGURE: `${UNIT_PREFIX}/configure`,
    PROCESSES: `${UNIT_PREFIX}/:id/processes`,
    EDIT_UNIT_CONFIGURATION: `${UNIT_PREFIX}/:id/edit`,
}
