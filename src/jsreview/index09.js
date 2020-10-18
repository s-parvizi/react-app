// Arrow Functions

// old javascript function style
const square1 = function (number) {
    return number * number;
};

// Arrow function style
const square2 = number => number * number;
console.log(square2(5));

const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false}
];

const activeJobs1 = jobs.filter(function (job) {
    return job.isActive;
});
const activeJobs2 = jobs.filter(job => job.isActive);
