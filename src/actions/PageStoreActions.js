import dispatcher from '../dispatcher'

export function loadPage(loc) {
	dispatcher.dispatch({
		type: "LOAD_PAGE",
		loc
	})
}