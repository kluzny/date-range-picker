import Ember from 'ember';
import layout from '../templates/components/date-range-picker';

export default Ember.Component.extend({
  layout,
  startDate: moment().startOf('day'),
  endDate: moment().startOf('day').add(1, 'month'),
  startMonth: moment().startOf('month'),
  endMonth: moment().startOf('month').add(1, 'month'),
  isExpanded: true,

  rangeFormatted: Ember.computed('startDate', 'endDate', function() {
    let startDate = this.get('startDate').format('MM/DD/YYYY');
    let endDate = this.get('startDate').format('MM/DD/YYYY');

    return `${startDate} - ${endDate}`;
  }),

  actions: {
    startSelected(day) {
      this.set('startDate', day);
    },

    endSelected(day) {
      this.set('endDate', day);
    },

    prevStartMonth() {
      this.set('startMonth', this.get('startMonth').add(-1, 'month').clone());
    },

    prevEndMonth() {
      this.set('endMonth', this.get('endMonth').add(-1, 'month').clone());
    },

    nextStartMonth() {
      this.set('startMonth', this.get('startMonth').add(1, 'month').clone());
    },

    nextEndMonth() {
      this.set('endMonth', this.get('endMonth').add(1, 'month').clone());
    },

    toggleIsExpanded() {
      this.toggleProperty('isExpanded');
    }
  }
});
