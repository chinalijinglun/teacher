import headers from './header'
import uploadButton from './upload/uploadButton'
import iframeDialog from './dialog/iframeDialog'
import curriculumSelect from './select/curriculumSelect'
import courseDateRange from './form/courseDateRange'
import step from './step/step'

const install = (Vue) => {
	Vue.component(headers.name,headers)
	Vue.component(uploadButton.name,uploadButton)
	Vue.component(iframeDialog.name,iframeDialog)
	Vue.component(curriculumSelect.name,curriculumSelect)
	Vue.component(courseDateRange.name,courseDateRange)
	Vue.component(step.name,step)
}

export default {
	install
}