import { expect } from '../chai-setup';
import { setupDriver } from './fixtures';
import {driverDefault} from "./defaults";

describe("Driver.sol", async () => {

    it("Should be able to create and retrieve new driver with given wallet address", async () => {
        const { createDriver, users, getDriver } = await setupDriver();
        await createDriver(users[0].address, driverDefault);
        const driver = await getDriver(users[0].address);

        expect(driver.fullname).to.be.equal(driverDefault.fullname);
        expect(driver.email).to.be.equal(driverDefault.email);
        expect(driver.dob).to.be.equal(driverDefault.dob);
        expect(driver.picture).to.be.equal(driverDefault.picture);
        expect(driver.govtID).to.be.equal(driverDefault.govtID);
        expect(driver.wallet).to.be.equal(driverDefault.wallet);
        expect(driver.driverAddress).to.be.equal(driverDefault.driverAddress);
    });


})