CREATE TABLE `Vehicle_Category` (
  `category_id` int PRIMARY KEY,
  `name` varchar(255)
);

CREATE TABLE `Vehicle` (
  `vehicle_id` int PRIMARY KEY,
  `vehicle_number` varchar(255),
  `category_id` int
);

CREATE TABLE `Parking_Zone` (
  `zone_id` int PRIMARY KEY,
  `name` varchar(255),
  `level` int
);

CREATE TABLE `Spot_Category` (
  `spot_category_id` int PRIMARY KEY,
  `name` varchar(255)
);

CREATE TABLE `Parking_Spot` (
  `spot_id` int PRIMARY KEY,
  `zone_id` int,
  `spot_category_id` int,
  `is_active` boolean
);

CREATE TABLE `Parking_Ticket` (
  `ticket_id` int PRIMARY KEY,
  `ticket_number` varchar(255),
  `issued_at` datetime
);

CREATE TABLE `Parking_Session` (
  `session_id` int PRIMARY KEY,
  `vehicle_id` int,
  `spot_id` int,
  `ticket_id` int,
  `entry_time` datetime,
  `exit_time` datetime,
  `status` varchar(255)
);

CREATE TABLE `Payment` (
  `payment_id` int PRIMARY KEY,
  `session_id` int,
  `amount` decimal,
  `payment_method` varchar(255),
  `payment_status` varchar(255),
  `payment_time` datetime
);

ALTER TABLE `Vehicle` ADD FOREIGN KEY (`category_id`) REFERENCES `Vehicle_Category` (`category_id`);

ALTER TABLE `Parking_Spot` ADD FOREIGN KEY (`zone_id`) REFERENCES `Parking_Zone` (`zone_id`);

ALTER TABLE `Parking_Spot` ADD FOREIGN KEY (`spot_category_id`) REFERENCES `Spot_Category` (`spot_category_id`);

ALTER TABLE `Parking_Session` ADD FOREIGN KEY (`vehicle_id`) REFERENCES `Vehicle` (`vehicle_id`);

ALTER TABLE `Parking_Session` ADD FOREIGN KEY (`spot_id`) REFERENCES `Parking_Spot` (`spot_id`);

ALTER TABLE `Parking_Session` ADD FOREIGN KEY (`ticket_id`) REFERENCES `Parking_Ticket` (`ticket_id`);

ALTER TABLE `Payment` ADD FOREIGN KEY (`session_id`) REFERENCES `Parking_Session` (`session_id`);
