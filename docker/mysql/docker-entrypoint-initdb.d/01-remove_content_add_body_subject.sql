ALTER TABLE `fostercare_schema`.`message`
DROP COLUMN `content`,
ADD COLUMN `body` VARCHAR(45) NULL DEFAULT NULL AFTER `from_id`,
ADD COLUMN `subject` VARCHAR(45) NULL DEFAULT NULL AFTER `body`;
