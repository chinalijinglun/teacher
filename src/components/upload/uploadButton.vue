<template>
  <div class="button_upload">
    <el-button @click="choseFile" :disabled="!disabledComputed" :loading="loading">{{btnTextComputer}}</el-button>
    <el-input type="text" :value="inputValue" class="hidden-input"></el-input>
    <p class="help-block">Support format: pdf/ppt/png/jpg, file less than 20M</p>
    <component :is="listType | typeFilter" :file-array="imgArray" @delete-item="deleteItem"></component>
  </div>
</template>
<script>
  import pictureList from './list/picture'
  import textList from './list/text'
  
  /**
   * 校验图片外文件上传时的类型
   * @param 文件对象file 文件类型type(pdf、video、audio) 默认pdf
   */
  const checkAttchmentType = (file, type = 'pdf') => {
    let isFit = true
    if (type === 'pdf') {
      for (let item of file) {
        if (item.type.toUpperCase().indexOf('PDF') === -1) {
          isFit = false
          break
        }
      }
    } else if (type === 'video') {
      for (let item of file) {
        if (item.type.toUpperCase().indexOf('VIDEO') === -1) {
          isFit = false
          break
        }
      }
    } else if (type === 'image') {
      for (let item of file) {
        if (item.type.toUpperCase().indexOf('IMAGE') === -1) {
          isFit = false
          break
        }
      }
    } else {
      for (let item of file) {
        if (item.type.toUpperCase().indexOf('AUDIO') === -1) {
          isFit = false
          break
        }
      }
    }
    return isFit
  }
  /**
   * 校验文件上传时的大小
   * @param 文件对象file 需求要求大小size 需求要求大小类型 type (默认k,可选MB,KB)
   */
  const checkFileSize = (file, size, type) => {
    let fileAttr = file.target.files[0] || file.dataTransfer.files[0]
    let fileSize = fileAttr.size
    let isSuite = true
    switch (type.toUpperCase()) {
      case 'G': {
        let mbSize = fileSize / 1024 / 1024 / 1024
        if (mbSize > size) {
          isSuite = false
        }
        break
      }
      case 'M': {
        let mbSize = fileSize / 1024 / 1024
        if (mbSize > size) {
          isSuite = false
        }
        break
      }
      case 'KB': {
        let kbSize = fileSize / 1024
        if (kbSize > size) {
          isSuite = false
        }
        break
      }
      default:
        if (fileSize > size) {
          isSuite = false
        }
    }
    return isSuite
  }

  export default {
    name: 'uploadButton',
    data () {
      return {
        loading: false
      }
    },
    props: {
      // 按钮文案
      btnText: {
        type: String,
        default: 'Upload'
      },
      // 最大文件数
      maxLength: {
        type: Number,
        default: 1
      },
      // 当是一张的时候value是字符串
      // 当是多张的时候value是数组
      value: [String, Array],
      // input[file]的name属性
      name: {
        type: String,
        default: 'file'
      },
      tips: {
        type: String,
        default: ''
      },
      listType: {
        type: String,
        default: 'text'
      },
      maxSize: {
        // size 需求要求大小类型 type (默认KB,可选M,G,KB) 单位大小写不区分
        // 默认为 5M
        type: String
      },
      fileType: {
        // 文件对象file 文件类型type(pdf、video、audio、image)
        // 默认image
        type: String
      }
    },
    computed: {
      imgArray () {
        if (this.maxLength > 1) {
          return this.value.map(item => ({
            ...item, 
            url: this.$baseApiUrl + item.url,
            name: item.name
          }))
        }
        if (this.value) {
          return [{
            url: this.$baseApiUrl + this.value.url,
            name: this.value
          }]
        }
        return []
      },
      sizeObject () {
        const result = new RegExp('(\\d+)([m|g|kb])', 'i').exec(this.maxSize)
        return {
          number: result[1],
          unit: result[2] || 'kb'
        }
      },
      btnTextComputer () {
        return this.loading ? 'uploading...' : this.btnText
      },
      inputValue () {
        if (this.value instanceof Array) {
          return this.value.join('')
        }
        return this.value
      },
      disabledComputed () {
        return this.maxLength >= 1 || this.maxLength > this.value.length
      }
    },
    filters: {
      typeFilter (type) {
        switch (type) {
          case 'text':
            return 'textList'
          case 'picture':
          default:
            return 'pictureList'
        }
      }
    },
    methods: {
      deleteItem (index) {
        if (this.maxLength > 1) {
          const imgArray = [...this.value]
          imgArray.splice(index, 1)
          this.$emit('input', imgArray)
        } else {
          this.$emit('input', '')
        }
      },
      choseFile() {
        const file = document.createElement('input')
        file.type = 'file'
        file.name = this.name
        file.onchange = this.handlerFileChange.bind(this)
        file.click()
      },
      handlerFileChange(e) {
        const fileInput = e.target
        const file = fileInput.files[0]
        if (!file) {
          return this.$message.error('No files are selected！')
        } else if (this.maxSize && !checkFileSize(e, this.sizeObject.number, this.sizeObject.unit)) {
          return this.$message.error(`The file is too large ！`)
        } else if (this.fileType && !checkAttchmentType([file], this.fileType)) {
          return this.$message.error('Invalid FileType！')
        }
        const form = document.createElement('form');
        form.appendChild(fileInput);
        const formData = new FormData(form);
        this.$axios.post(this.$baseApiUrl + '/upload', formData).then(resp => {
          if(this.maxLength > 1) {
            const value = [...this.value]
            value.push({
              name: resp.data[0].upload_file,
              url: resp.data[0].download_file
            })
            this.$emit('input', value);
          } else {
            const value =  resp.data[0].download_file
            this.$emit('input', value);
          }
        });
      }
    },
    components: {
      pictureList,
      textList
    }
  }
</script>
<style>
span.ms-upload-button {
  position: relative;
  display: inline-block;
  width: 198px;
  height: 38px;
  background: #f7f7f7;
  border: 1px solid #d8d8d8;
  border-radius: 3px;
  line-height: 38px;
  text-align: center;
}
span.ms-upload-button .upload-input {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
}
.help-block {
  font-size: 12px;
  color: #999;
}
</style>

