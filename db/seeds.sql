INSERT INTO department (name)
VALUES ('development'),
    ('finance'),
    ('legal'),
    ('marketing'),
    ('HR'),
    ('sales'),
    ('executive');

INSERT INTO role (title, salary, department_id)
VALUES ('Senior Developer', 100000, 1),
    ('Developer', 60000, 1),
    ('Accountant', 80000, 2),
    ('Senior Legal Advisor', 190000, 3),
    ('Lawyer', 70000, 3),
    ('Senior Marketing Director', 120000, 4),
    ('Marketing Assistant', 80000, 4),
    ('HR Manager', 90000, 5),
    ('HR Lead', 50000, 5),
    ('Sales Lead', 70000, 6),
    ('President', 600000, 7),
    ('CEO', 350000, 7),
    ('Director', 250000, 7);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Romero', 1, 13),
('John', 'Szymanski', 2, 13),
('Ville', 'Kallio', 2, 13),
('Beau', 'Meixner', 3, 12),
('Johnnie', 'Cochran Jr', 4, 12),
('Saul', 'Goodman', 5, 12),
('Ellie', 'Williams', 6, 12),
('Joel', 'Miller', 7, 6),
('Thor', 'Odinsson', 8, 12),
('Freddy', 'Fazbear', 9, 8),
('Winry', 'Rockbell', 10, 12),
('Light', 'Yagami', 10, 12),
('Gabe', 'Newell', 11, null),
('Steven', 'Armstrong', 12, 11),
('Cory', 'Barlog', 13, 11);



