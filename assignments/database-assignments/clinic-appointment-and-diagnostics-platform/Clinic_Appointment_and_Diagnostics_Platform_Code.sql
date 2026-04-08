CREATE TABLE `Patient` (
  `patient_id` int PRIMARY KEY,
  `name` varchar(255),
  `phone` varchar(255),
  `email` varchar(255),
  `gender` varchar(255),
  `date_of_birth` date,
  `address` text
);

CREATE TABLE `Doctor` (
  `doctor_id` int PRIMARY KEY,
  `name` varchar(255),
  `phone` varchar(255),
  `email` varchar(255),
  `specialization` varchar(255)
);

CREATE TABLE `Appointment` (
  `appointment_id` int PRIMARY KEY,
  `patient_id` int,
  `doctor_id` int,
  `scheduled_at` datetime,
  `status` varchar(255)
);

CREATE TABLE `Consultation` (
  `consultation_id` int PRIMARY KEY,
  `appointment_id` int,
  `consultation_date` datetime,
  `diagnosis` text,
  `prescription` text,
  `notes` text
);

CREATE TABLE `Diagnostic_Test` (
  `test_id` int PRIMARY KEY,
  `name` varchar(255),
  `description` text,
  `price` decimal
);

CREATE TABLE `Test_Order` (
  `test_order_id` int PRIMARY KEY,
  `consultation_id` int,
  `test_id` int,
  `status` varchar(255)
);

CREATE TABLE `Report` (
  `report_id` int PRIMARY KEY,
  `test_order_id` int,
  `result` text,
  `report_file_url` text,
  `generated_at` datetime
);

CREATE TABLE `Payment` (
  `payment_id` int PRIMARY KEY,
  `patient_id` int,
  `consultation_id` int,
  `amount` decimal,
  `payment_method` varchar(255),
  `payment_status` varchar(255),
  `payment_date` datetime
);

ALTER TABLE `Appointment` ADD FOREIGN KEY (`patient_id`) REFERENCES `Patient` (`patient_id`);

ALTER TABLE `Appointment` ADD FOREIGN KEY (`doctor_id`) REFERENCES `Doctor` (`doctor_id`);

ALTER TABLE `Consultation` ADD FOREIGN KEY (`appointment_id`) REFERENCES `Appointment` (`appointment_id`);

ALTER TABLE `Test_Order` ADD FOREIGN KEY (`consultation_id`) REFERENCES `Consultation` (`consultation_id`);

ALTER TABLE `Test_Order` ADD FOREIGN KEY (`test_id`) REFERENCES `Diagnostic_Test` (`test_id`);

ALTER TABLE `Report` ADD FOREIGN KEY (`test_order_id`) REFERENCES `Test_Order` (`test_order_id`);

ALTER TABLE `Payment` ADD FOREIGN KEY (`patient_id`) REFERENCES `Patient` (`patient_id`);

ALTER TABLE `Payment` ADD FOREIGN KEY (`consultation_id`) REFERENCES `Consultation` (`consultation_id`);
