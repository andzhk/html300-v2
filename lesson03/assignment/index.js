const dataJSON = '[{"img1":"img/headshot.jpg", "name": "Paolo Maldini", "jobTitle": "Front End Developer"}]'

const data = JSON.parse(dataJSON);

data.find(function(el) {

  let list = document.createElement('div')
  list.innerHTML = `
  <img src="img/headshot.jpg" class="dog" width="130" height="130">
  <!-- //  <img src${el.img1} class="dog" width="130" height="130"> -->
  <h4 class="name">${el.name}</h4>
  <h5 class="career">${el.jobTitle}</h5>
`

  const container = document.querySelector('.contact')
  container.append(list)
});

// const dogImageJSON = '[{"img1": "img/headshot.jpg"}, {"img2": "img/linkedin.svg}]'
//
// const dogImage = JSON.parse(dogImageJSON);


const data2JSON = '[{"company": "Company: Web Weavers", "experience": "Experience: 3 years", "school": "School: University of Washington","major": "Major: Marketing", "email": "email: paolo@example.com", "linkedInUrl": "linkedInUrl: paolo.linkedinprofile.com"}]'

const data2 = JSON.parse(data2JSON);

data2.find(function(el) {

  let list2 = document.createElement('div')
  list2.innerHTML = `
  <p class="description">${el.company}</p>
  <p class="description">${el.experience}</p>
    <p class="description">${el.school}</p>
      <p class="description">${el.major}</p>
        <p class="description">${el.email}</p>
        <p class="description">${el.linkedInUrl}</p>

  `

  const container = document.querySelector('.text')
  container.append(list2)

});


//, {"company": "Company: Web Weavers", "experience": "3 years", "school": "University of Washington","major": "Marketing", "email": "paolo@example.com", "linkedInUrl": "paolo.linkedinprofile.com"}
