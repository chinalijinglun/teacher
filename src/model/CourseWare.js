export default class CourseWare{
	constructor({
		course_schedule_id = '',
		file_url = '',
		is_view = 'YES',
		ware_name = ''
	}) {
		this.course_schedule_id = course_schedule_id;
		this.file_url = file_url;
		this.is_view = is_view;
		this.ware_name = ware_name;
	}
}