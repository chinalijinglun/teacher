import headers from './header'
import uploadButton from './upload/uploadButton'
import iframeDialog from './dialog/iframeDialog'
import curriculumSelect from './select/curriculumSelect'

const install = (Vue) => {
	Vue.component(headers.name,headers)
	Vue.component(uploadButton.name,uploadButton)
	Vue.component(iframeDialog.name,iframeDialog)
	Vue.component(curriculumSelect.name,curriculumSelect)
}

export default {
	install
}