import {FaFileAlt} from 'react-icons/fa'

export default {
  name: 'localFile',
  type: 'file',
  title: 'File',
  icon: FaFileAlt,
  // options: {
  //   accept: '.pdf,.docx,.doc,.xls,.xlsx'
  // },
  fields: [
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      title: 'description'
    }
  }
}
