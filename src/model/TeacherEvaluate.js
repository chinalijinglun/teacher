class CompletionStatus {
  constructor({
    status  = 'Completed',
    text = ''
  }) {
    this.status = status;
    this.text = text;
  }
}

class Performace {
  constructor({
    overall = '',
    onTime = 'YES',
    missTime = '',
    attitude = 'Excellent',
    interaction = 'Excellent'
  }) {
    this.overall = overall;
    this.onTime = onTime;
    this.missTime = missTime;
    this.attitude = attitude;
    this.interaction = interaction;
  }
}

const OVERALL_ENUM = {
  'Grade A': 'Grade A',
  'Grade B': 'Grade B',
  'Grade C': 'Grade C',
  'Grade D': 'Grade D',
  'Grade E': 'Grade E'
}
const ATTITUDE_ENUM = {
  'Excellent': 'Excellent',
  'Good': 'Good',
  'Poor': 'Poor'
}
const INTERACTION_ENUM = {
  'Excellent': 'Excellent',
  'Good': 'Good',
  'Poor': 'Poor'
}

export {
  OVERALL_ENUM,
  INTERACTION_ENUM,
  ATTITUDE_ENUM
}

export default class TeacherEvaluate {
  constructor({
    lesson_objective = '',
    completion_status = new CompletionStatus({}),
    performace = new Performace({}),
    summary = '',
    skills = '',
    improved = '',
    suggest = '',
    created_at
  }) {
    this.lesson_objective  = lesson_objective;
    this.completion_status = completion_status;
    this.performace        = performace;
    this.summary           = summary;
    this.skills            = skills;
    this.improved          = improved;
    this.suggest           = suggest;
    this.created_at = created_at;
  }
}
