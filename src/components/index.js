import headers from './header'
import uploadButton from './upload/uploadButton'
import iframeDialog from './dialog/iframeDialog'

const install = (Vue) => {
	Vue.component(headers.name,headers)
	Vue.component(uploadButton.name,uploadButton)
	Vue.component(iframeDialog.name,iframeDialog)
}

export default {
	install
}