CREATE TABLE `Building` (
  `building_id` int PRIMARY KEY,
  `name` varchar(255),
  `location` varchar(255)
);

CREATE TABLE `Floor` (
  `floor_id` int PRIMARY KEY,
  `building_id` int,
  `floor_number` int
);

CREATE TABLE `Elevator_Shaft` (
  `shaft_id` int PRIMARY KEY,
  `building_id` int,
  `shaft_number` int
);

CREATE TABLE `Elevator` (
  `elevator_id` int PRIMARY KEY,
  `shaft_id` int,
  `current_floor_id` int,
  `status` varchar(255)
);

CREATE TABLE `Elevator_Floor_Map` (
  `id` int PRIMARY KEY,
  `elevator_id` int,
  `floor_id` int
);

CREATE TABLE `Floor_Request` (
  `request_id` int PRIMARY KEY,
  `building_id` int,
  `source_floor_id` int,
  `destination_floor_id` int,
  `request_time` datetime,
  `status` varchar(255)
);

CREATE TABLE `Ride_Assignment` (
  `assignment_id` int PRIMARY KEY,
  `request_id` int,
  `elevator_id` int,
  `assigned_at` datetime
);

CREATE TABLE `Ride_Log` (
  `ride_id` int PRIMARY KEY,
  `elevator_id` int,
  `request_id` int,
  `start_time` datetime,
  `end_time` datetime,
  `status` varchar(255)
);

CREATE TABLE `Maintenance_Record` (
  `maintenance_id` int PRIMARY KEY,
  `elevator_id` int,
  `issue_description` text,
  `start_time` datetime,
  `end_time` datetime,
  `status` varchar(255)
);

ALTER TABLE `Floor` ADD FOREIGN KEY (`building_id`) REFERENCES `Building` (`building_id`);

ALTER TABLE `Elevator_Shaft` ADD FOREIGN KEY (`building_id`) REFERENCES `Building` (`building_id`);

ALTER TABLE `Elevator` ADD FOREIGN KEY (`shaft_id`) REFERENCES `Elevator_Shaft` (`shaft_id`);

ALTER TABLE `Elevator` ADD FOREIGN KEY (`current_floor_id`) REFERENCES `Floor` (`floor_id`);

ALTER TABLE `Elevator_Floor_Map` ADD FOREIGN KEY (`elevator_id`) REFERENCES `Elevator` (`elevator_id`);

ALTER TABLE `Elevator_Floor_Map` ADD FOREIGN KEY (`floor_id`) REFERENCES `Floor` (`floor_id`);

ALTER TABLE `Floor_Request` ADD FOREIGN KEY (`building_id`) REFERENCES `Building` (`building_id`);

ALTER TABLE `Floor_Request` ADD FOREIGN KEY (`source_floor_id`) REFERENCES `Floor` (`floor_id`);

ALTER TABLE `Floor_Request` ADD FOREIGN KEY (`destination_floor_id`) REFERENCES `Floor` (`floor_id`);

ALTER TABLE `Ride_Assignment` ADD FOREIGN KEY (`request_id`) REFERENCES `Floor_Request` (`request_id`);

ALTER TABLE `Ride_Assignment` ADD FOREIGN KEY (`elevator_id`) REFERENCES `Elevator` (`elevator_id`);

ALTER TABLE `Ride_Log` ADD FOREIGN KEY (`elevator_id`) REFERENCES `Elevator` (`elevator_id`);

ALTER TABLE `Ride_Log` ADD FOREIGN KEY (`request_id`) REFERENCES `Floor_Request` (`request_id`);

ALTER TABLE `Maintenance_Record` ADD FOREIGN KEY (`elevator_id`) REFERENCES `Elevator` (`elevator_id`);
