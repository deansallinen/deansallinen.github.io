Vue.component('dean-head',{
  template: '<header id="vue-header">\
    <a href="../index.html" ><h6 class="light">Dean Sallinen</h6></a>\
    <h1 class="light" id="head">Vue</h1>\
  </header>'
});

Vue.component('dean-foot',{
  template: '<footer >\
<p class="light">Dean Sallinen is a designer/developer/data enthusiast born and raised in Vancouver B.C.</p>\
<p class="light">Twitter</p>\
<p class="light">Projects</p>\
<p><a href="./pages/my-first-vue.html">Vue</a></p>\
</footer>'
});

Vue.component('dean-project',{
  props: ['project'],
  template: '<div class="project">\
<h3><a v-bind:href="project.url">{{project.name}}</a></h3>\
<p>{{project.description}}</p>\
<p>Tools: {{project.tools}}</p>\
</div>'
});

// Vue.component('page-content', {
//   template: marked('# Marked in browser\
//   Rendered by **marked**.')
// });

var projects = [
      { id: 'flextogcal',
        name: 'Flex To Gcal',
        url: '#',
        description: 'A small script to export events from Flex Rental software to a Google Calendar.',
        tools: 'Javascript, Google Calendar API'},
      { id: 'bcvotes',
        name: 'BC Votes',
        url: '/pages/bcvotes.html',
        description: 'A website designed to help voters find the candidates running in their area.',
        tools: 'Python, CSS Grid'},
      { id: 'thelastskytrain',
        name: 'The Last Skytrain',
        url: '/pages/thelastskytrain.html',
        description: 'A website designed to help commuters find the time of the last running Skytrain in Vancouver.',
        tools: 'CSS Grid'},
      { id: 'ferrytracker',
        name: 'Ferry Tracker',
        url: 'https://ferry-tracker-node.herokuapp.com',
        description: 'A website designed to help commuters find BC ferry departure and arrival times.',
        tools: 'Node.js, jQuery, Heroku'}
    ];

var vm = new Vue({
  el: '#app',
  data: {
    projectList: projects
  }
});