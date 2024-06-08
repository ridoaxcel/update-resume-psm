import { expect,browser,$ } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import ConfirmLogin from '../pageobjects/confirmLogin.page.js'
import { username, password } from '../account/akun.js'
import { typeIdentity } from '../data/type-identitas.js'
import resume from '../pageobjects/updateresume.js'
import confirm from '../pageobjects/confirm.js'
import path from 'path'
// import fs from 'fs'
// import pdf from 'pdf-parse'

describe('Checking Update Resume Data Personal', () => {
    before(async () => {
        await LoginPage.open()
        await LoginPage.login(username, password)
        await expect(ConfirmLogin.checkLogin).toBeExisting()
        // await resume.open()
        // await resume.clickUpdateResume()
    });
    beforeEach(async () => {
        await resume.open()
        await resume.clickUpdateResume()
    });
    it('Check profile Data Personal', async () => {
        await resume.clickDataPersonal()
        await confirm.waitForProfileSrc();
        const srcAttributeProfil = await confirm.getAttProfil();
        expect(srcAttributeProfil).toBeTruthy();
    })
    it('Check Data Personal button CV Ready', async () => {
        await resume.clickDataPersonal()
        await resume.clickCVReady();
        await expect(confirm.checkStatus).toHaveText('Sukses Mengganti Status CV!')
        await confirm.checkStatus.waitForDisplayed({ reverse: true });
    })
    it('Check Data Personal button ubah data', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        await expect(confirm.checkBtnBatal).toBeDisplayed()
        await expect(confirm.checkBtnSubmit).toBeDisplayed()
        await expect(confirm.checkUploadProfil).toBeDisplayed()
        await expect(confirm.btnGenerateID).toBeEnabled()
        await resume.clickBtnBatal()
    })
    it('Check Data Personal - ubah data - check generate ID', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        await resume.clickBtnGenerateID()
        await confirm.waitForNumberIDPSM();
        const generateIDPSM = await confirm.getValueGenerateID();
        expect(generateIDPSM).toBeTruthy();
    })
    it('Check Data Personal - ubah data - Uji Upload file profile', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        const filePathProfile = path.join(process.cwd() , 'test','img','hello.jpg');
        await resume.clickChooseFileProfile(filePathProfile)
        await resume.clickBtnSubmit()
        await expect(confirm.checkStatus).toHaveText('Sukses Update Data Pelamar!')
        await confirm.checkStatus.waitForDisplayed({ reverse: true })
        await confirm.waitForProfileSrc();
        const srcAttributeProfil = await confirm.getAttProfil()
        expect(srcAttributeProfil).toBeTruthy();
    })
    it('Check Data Personal - ubah data - Uji input Nama valid', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        const nama = 'Coffe Addict'
        await resume.inputNamaDataPersonal(nama)
        await resume.clickBtnSubmit()
        expect(await confirm.namaApplicant).toEqual(nama)
        await expect(confirm.checkStatus).toHaveText('Sukses Update Data Pelamar!')
        await confirm.checkStatus.waitForDisplayed({ reverse: true })       
    })
    it('Check Data Personal - ubah data - Uji input email valid', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        const email = 'Coffeaddict@mail.com'
        await resume.inputEmailDataPersonal(email)
        await resume.clickBtnSubmit()
        expect(await confirm.emailApplicant).toEqual(email)
        await expect(confirm.checkStatus).toHaveText('Sukses Update Data Pelamar!')
        await confirm.checkStatus.waitForDisplayed({ reverse: true })
    })
    it('Check Data Personal - ubah data - Uji ubah nomor identitas', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        const nomorIdentitas = '08131111111'; 
        await resume.inputNomorIdentitasDataPersonal(nomorIdentitas)
        await resume.clickBtnSubmit()
        expect(await confirm.nomorIdentitasApplicant).toEqual(nomorIdentitas)
        await expect(confirm.checkStatus).toHaveText('Sukses Update Data Pelamar!')
        await confirm.checkStatus.waitForDisplayed({ reverse: true })
    })
    it  ('Check Data Personal - ubah data - Uji Tipe Identitas', async () => {
        const lengthTypeIdentitas = await confirm.lengthTypeIdentitasApplicant
        for(let i=0;i<lengthTypeIdentitas;i++){
            await resume.clickDataPersonal()
            await resume.clickBtnUbahData()
            await resume.inputIdentitasDataPersonal(i)
            await resume.clickBtnSubmit()
            expect(await confirm.getSelectedIdentityTypeText()).toEqual(typeIdentity[i])
            await expect(confirm.checkStatus).toHaveText('Sukses Update Data Pelamar!')
            await confirm.checkStatus.waitForDisplayed({ reverse: true })
        }
    })
    
    it('Check Data Personal - ubah data - Uji nomor hp', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        const nomorHP = '08131341523'; 
        await resume.inputNomorHPDataPersonal(nomorHP)
        await resume.clickBtnSubmit()
        expect(await confirm.nomorHPApplicant).toEqual(nomorHP)
        await expect(confirm.checkStatus).toHaveText('Sukses Update Data Pelamar!')
        await confirm.checkStatus.waitForDisplayed({ reverse: true })
    })
    it.only('Check Data Personal - ubah data - Uji tanggal lahir', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        const birthDate = '2001-02-01'; 
        await resume.inputDateOfBirth(birthDate)
        await resume.clickBtnSubmit()
        expect(await confirm.getBirthDate()).toEqual(birthDate)
        await expect(confirm.checkStatus).toHaveText('Sukses Update Data Pelamar!')
        await confirm.checkStatus.waitForDisplayed({ reverse: true })
    })
    it('Check Data Personal - ubah data - Uji input alamat applicant sesuai KTP', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        const alamatKTP = 'Excepteur aute eu ullamco id quis proident pariatur excepteur commodo veniam ipsum reprehenderit. Enim sit dolor minim aliquip duis. Exercitation cillum magna voluptate nulla nisi exercitation amet est labore. Elit ut consectetur cupidatat occaecat cupidatat nulla culpa consequat dolor ad est ea dolore ex.' 
        await resume.inputAlamatApplicantKTP(alamatKTP)
        await resume.clickBtnSubmit()
        expect(await confirm.getAlamatKTPText()).toEqual(alamatKTP)
        await expect(confirm.checkStatus).toHaveText('Sukses Update Data Pelamar!')
        await confirm.checkStatus.waitForDisplayed({ reverse: true })
    })
    it('Check Data Personal - ubah data - Uji input alamat applicant sesuai domisili', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        const alamatDomisili = 'Proident sunt Lorem elit non consectetur. Sint tempor ipsum excepteur in exercitation magna culpa mollit occaecat tempor esse. Quis officia ea nisi consectetur labore tempor.' 
        await resume.inputAlamatApplicantDomisili(alamatDomisili)
        await resume.clickBtnSubmit()
        expect(await confirm.getAlamatDomisiliText()).toEqual(alamatDomisili)
        await expect(confirm.checkStatus).toHaveText('Sukses Update Data Pelamar!')
        await confirm.checkStatus.waitForDisplayed({ reverse: true })
    })
    it('Check Data Personal - ubah data - Uji Upload file resume', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        const filePathResume = path.join(process.cwd() , 'test','file','dummyFile1MB.pdf');
        await resume.clickChooseFileResume(filePathResume)
        await resume.clickBtnSubmit()
        await expect(confirm.checkStatus).toHaveText('Sukses Update Data Pelamar!')
        await confirm.checkStatus.waitForDisplayed({ reverse: true })
    })
    it('Check Data Personal - ubah data - Uji Upload file ijazah terakhir', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        const filePathIjazah = path.join(process.cwd() , 'test','file','dummyFile1MB.pdf');
        await resume.clickChooseFileIjazah(filePathIjazah)
        await resume.clickBtnSubmit()
        await expect(confirm.checkStatus).toHaveText('Sukses Update Data Pelamar!')
        await confirm.checkStatus.waitForDisplayed({ reverse: true })
    })
    it('Check Data Personal - ubah data - Uji Upload file transkrip terakhir', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        const filePathTrankrip = path.join(process.cwd() , 'test','file','dummyFile1MB.pdf');
        await resume.clickChooseFileTransrip(filePathTrankrip)
        await resume.clickBtnSubmit()
        await expect(confirm.checkStatus).toHaveText('Sukses Update Data Pelamar!')
        await confirm.checkStatus.waitForDisplayed({ reverse: true })
    })
    it('Check Data Personal - ubah data - Uji Upload file dokumen pendukung', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        const filePathDPendukung = path.join(process.cwd() , 'test','file','dummyFile1MB.pdf');
        await resume.clickChooseFileDPendukung(filePathDPendukung)
        await resume.clickBtnSubmit()
        await expect(confirm.checkStatus).toHaveText('Sukses Update Data Pelamar!')
        await confirm.checkStatus.waitForDisplayed({ reverse: true })
    })

    //case negatif
    it('Check Data Personal - ubah data - Uji input email invalid tanpa ada titik', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        const email = 'Coffeaddict@mail'
        await resume.inputEmailDataPersonal(email)
        await resume.clickBtnSubmit()
        expect(await confirm.emailApplicant).toEqual(email)
        await expect(confirm.checkStatus).toHaveText('Email tidak valid')
        await confirm.checkStatus.waitForDisplayed({ reverse: true })
    })
    it('Check Data Personal - ubah data - Uji input email invalid hanya @', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        const email = 'Coffeaddict@'
        await resume.inputEmailDataPersonal(email)
        await resume.clickBtnSubmit()
        expect(await confirm.emailApplicant).toEqual(email)
        await expect(confirm.checkStatus).toHaveText('Email tidak valid')
        await confirm.checkStatus.waitForDisplayed({ reverse: true })
    })
    it('Check Data Personal - ubah data - Uji input email invalid tanpa @', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        const email = 'Coffeaddict'
        await resume.inputEmailDataPersonal(email)
        await resume.clickBtnSubmit()
        expect(await confirm.emailApplicant).toEqual(email)
        await expect(confirm.checkStatus).toHaveText('Email tidak valid')
        await confirm.checkStatus.waitForDisplayed({ reverse: true })
    })

    // test boundary value file upload
    it('Check Data Personal - ubah data - Uji Upload file profile 5 MB', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        const filePathProfile = path.join(process.cwd() , 'test','img','Snake_River_5MB.jpg');
        await resume.clickChooseFileProfile(filePathProfile)
        await resume.clickBtnSubmit()
        await expect(confirm.checkStatus).toHaveText('Sukses Update Data Pelamar!')
        await confirm.checkStatus.waitForDisplayed({ reverse: true })
        await confirm.waitForProfileSrc();
        const srcAttributeProfil = await confirm.getAttProfil()
        expect(srcAttributeProfil).toBeTruthy();
    })
    it('Check Data Personal - ubah data - Uji Upload file resume 5MB', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        const filePathResume = path.join(process.cwd() , 'test','file','dummyFile5MB.pdf');
        await resume.clickChooseFileResume(filePathResume)
        await resume.clickBtnSubmit()
        await expect(confirm.checkStatus).toHaveText('Sukses Update Data Pelamar!')
        await confirm.checkStatus.waitForDisplayed({ reverse: true })
    })
    it('Check Data Personal - ubah data - Uji Upload file ijazah terakhir 5MB', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        const filePathIjazah = path.join(process.cwd() , 'test','file','dummyFile5MB.pdf');
        await resume.clickChooseFileIjazah(filePathIjazah)
        await resume.clickBtnSubmit()
        await expect(confirm.checkStatus).toHaveText('Sukses Update Data Pelamar!')
        await confirm.checkStatus.waitForDisplayed({ reverse: true })
    })
    it('Check Data Personal - ubah data - Uji Upload file transkrip terakhir 5MB', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        const filePathTrankrip = path.join(process.cwd() , 'test','file','dummyFile5MB.pdf');
        await resume.clickChooseFileTransrip(filePathTrankrip)
        await resume.clickBtnSubmit()
        await expect(confirm.checkStatus).toHaveText('Sukses Update Data Pelamar!')
        await confirm.checkStatus.waitForDisplayed({ reverse: true })
    })
    it('Check Data Personal - ubah data - Uji Upload file dokumen pendukung 5MB', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        const filePathDPendukung = path.join(process.cwd() , 'test','file','dummyFile5MB.pdf');
        await resume.clickChooseFileDPendukung(filePathDPendukung)
        await resume.clickBtnSubmit()
        await expect(confirm.checkStatus).toHaveText('Sukses Update Data Pelamar!')
        await confirm.checkStatus.waitForDisplayed({ reverse: true })
    })
    //test file lebih besar dari 5 MB
    it('Check Data Personal - ubah data - Uji Upload file profile 6MB', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        const filePathProfile = path.join(process.cwd() , 'test','img','dummyJPG6MB.jpg');
        await resume.clickChooseFileProfile(filePathProfile)
        await resume.clickBtnSubmit()
        await expect(confirm.checkStatus).toHaveText('Gagal file profile terlalu besar!')
        await confirm.checkStatus.waitForDisplayed({ reverse: true })
        await confirm.waitForProfileSrc();
        const srcAttributeProfil = await confirm.getAttProfil()
        expect(srcAttributeProfil).toBeTruthy();
    })
    it('Check Data Personal - ubah data - Uji Upload file resume 6 MB', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        const filePathResume = path.join(process.cwd() , 'test','file','dummyFile6MB.pdf');
        await resume.clickChooseFileResume(filePathResume)
        await resume.clickBtnSubmit()
        await expect(confirm.checkStatus).toHaveText('Gagal file resume terlalu besar!')
        await confirm.checkStatus.waitForDisplayed({ reverse: true })
    })
    it('Check Data Personal - ubah data - Uji Upload file ijazah terakhir 6 MB', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        const filePathIjazah = path.join(process.cwd() , 'test','file','dummyFile6MB.pdf');
        await resume.clickChooseFileIjazah(filePathIjazah)
        await resume.clickBtnSubmit()
        await expect(confirm.checkStatus).toHaveText('Gagal file ijazah terlalu besar!')
        await confirm.checkStatus.waitForDisplayed({ reverse: true })
    })
    it('Check Data Personal - ubah data - Uji Upload file transkrip terakhir 6 MB', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        const filePathTrankrip = path.join(process.cwd() , 'test','file','dummyFile6MB.pdf');
        await resume.clickChooseFileTransrip(filePathTrankrip)
        await resume.clickBtnSubmit()
        await expect(confirm.checkStatus).toHaveText('Gagal file transkrip terlalu besar!')
        await confirm.checkStatus.waitForDisplayed({ reverse: true })
    })
    it('Check Data Personal - ubah data - Uji Upload file dokumen pendukung 6 MB', async () => {
        await resume.clickDataPersonal()
        await resume.clickBtnUbahData()
        const filePathDPendukung = path.join(process.cwd() , 'test','file','dummyFile6MB.pdf');
        await resume.clickChooseFileDPendukung(filePathDPendukung)
        await resume.clickBtnSubmit()
        await expect(confirm.checkStatus).toHaveText('Gagal file dokumen pendukung terlalu besar!')
        await confirm.checkStatus.waitForDisplayed({ reverse: true })
    })
})

