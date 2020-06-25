var tasks = [{
    'id': 1,
    'parentId': 0,
    'title': 'Johnson Residence Construction Project',
    'start': new Date('2020-01-01'),
    'end': new Date('2020-01-01'),
    'progress': 0
}, {
    'id': 2,
    'parentId': 1,
    'title': 'Planning and Pre-Construction Phase',
    'start': new Date('2020-01-01'),
    'end': new Date('2020-01-01'),
    'progress': 0
}, {
    'id': 3,
    'parentId': 2,
    'title': 'Architectural Design and Site Planning',
    'start': new Date('2020-01-01'),
    'end': new Date('2020-01-15'),
    'progress': 0
}, {
    'id': 4,
    'parentId': 2,
    'title': 'Engineering and Final Blueprint',
    'start': new Date('2020-01-08'),
    'end': new Date('2020-01-15'),
    'progress': 0
}, {
    'id': 5,
    'parentId': 2,
    'title': 'City Permits and Contracts',
    'start': new Date('2020-01-15'),
    'end': new Date('2020-01-18'),
    'progress': 0
}, {
    'id': 6,
    'parentId': 1,
    'title': 'Construction Phase',
    'start': new Date('2020-01-18'),
    'end': new Date('2020-01-18'),
    'progress': 0
}, {
    'id': 7,
    'parentId': 6,
    'title': 'Grading and Excavation',
    'start': new Date('2020-01-18'),
    'end': new Date('2020-01-22'),
    'progress': 0
}, {
    'id': 8,
    'parentId': 6,
    'title': 'Demolition and Removal',
    'start': new Date('2020-01-19'),
    'end': new Date('2020-01-23'),
    'progress': 0
}, {
    'id': 9,
    'parentId': 6,
    'title': 'Foundation and Concrete ',
    'start': new Date('2020-01-22'),
    'end': new Date('2020-01-29'),
    'progress': 0
}, {
    'id': 10,
    'parentId': 6,
    'title': 'Rough Framing and Carpentery',
    'start': new Date('2020-01-25'),
    'end': new Date('2020-02-05'),
    'progress': 0
}, {
    'id': 11,
    'parentId': 6,
    'title': 'Inspection (Structure)',
    'start': new Date('2020-02-05'),
    'end': new Date('2020-02-05'),
    'progress': 0
}, {
    'id': 12,
    'parentId': 6,
    'title': 'Electrical Rough-in',
    'start': new Date('2020-02-06'),
    'end': new Date('2020-02-19'),
    'progress': 0
}, {
    'id': 13,
    'parentId': 6,
    'title': 'Plumbing Rough-in',
    'start': new Date('2020-02-19'),
    'end': new Date('2020-02-19'),
    'progress': 0
}, {
    'id': 14,
    'parentId': 6,
    'title': 'Heating and A/C',
    'start': new Date('2020-02-19'),
    'end': new Date('2020-02-26'),
    'progress': 0
}, {
    'id': 15,
    'parentId': 6,
    'title': 'Drywall',
    'start': new Date('2020-02-25'),
    'end': new Date('2020-03-10'),
    'progress': 0
}, {
    'id': 16,
    'parentId': 6,
    'title': 'Painting (Exterior)',
    'start': new Date('2020-03-07'),
    'end': new Date('2020-03-21'),
    'progress': 0
}, {
    'id': 17,
    'parentId': 6,
    'title': 'Interior Carpentery (Interior)',
    'start': new Date('2020-03-17'),
    'end': new Date('2020-03-29'),
    'progress': 0
}, {
    'id': 18,
    'parentId': 6,
    'title': 'Flooring and Interior Paint',
    'start': new Date('2020-03-26'),
    'end': new Date('2020-04-09'),
    'progress': 0
}, {
    'id': 19,
    'parentId': 1,
    'title': 'Final Phase',
    'start': new Date('2020-04-09'),
    'end': new Date('2020-04-09'),
    'progress': 0
}, {
    'id': 20,
    'parentId': 19,
    'title': 'Review-Punch List',
    'start': new Date('2020-04-09'),
    'end': new Date('2020-04-23'),
    'progress': 0
}, {
    'id': 21,
    'parentId': 19,
    'title': 'Final Inspection',
    'start': new Date('2020-04-24'),
    'end': new Date('2020-04-24'),
    'progress': 0
}, {
    'id': 22,
    'parentId': 19,
    'title': 'Final Paperwork and Documents',
    'start': new Date('2020-04-24'),
    'end': new Date('2020-04-30'),
    'progress': 0
}];

var dependencies = [{
    'id': 1,
    'predecessorId': 4,
    'successorId': 5,
    'type': 0
}, {
    'id': 2,
    'predecessorId': 5,
    'successorId': 7,
    'type': 0
}, {
    'id': 3,
    'predecessorId': 12,
    'successorId': 13,
    'type': 0
}, {
    'id': 4,
    'predecessorId': 13,
    'successorId': 14,
    'type': 0
}, {
    'id': 5,
    'predecessorId': 18,
    'successorId': 20,
    'type': 0
}, {
    'id': 6,
    'predecessorId': 21,
    'successorId': 22,
    'type': 0
}];