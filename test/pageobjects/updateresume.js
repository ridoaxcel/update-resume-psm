import { $ } from '@wdio/globals';
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class resume extends Page {
    /**
     * define selectors using getter methods
     */
    // untuk tampilan update resume
    get btnSubmit() {
        return $('button.btn.text-white.btn-primary.btn-sm[type="submit"]');
    }
    get btnDropdown() {
        return $('.dropdown-bottom');
    }
    get btnUpdateResume() {
        return $('.dropdown-bottom > ul > li:nth-child(2)');
    }
    get btnDataPersonal() {
        return $('.flex.flex-col.gap-2 > button:nth-child(1)');
    }
    get btnPendidikan() {
        return $('.flex.flex-col.gap-2 > button:nth-child(2)');
    }
    get btnPengalaman() {
        return $('.flex.flex-col.gap-2 > button:nth-child(3)');
    }
    get btnProject() {
        return $('.flex.flex-col.gap-2 > button:nth-child(4)');
    }
    get btnPelatihan() {
        return $('.flex.flex-col.gap-2 > button:nth-child(5)');
    }
    get btnSertifikasi() {
        return $('.flex.flex-col.gap-2 > button:nth-child(6)');
    }
    get btnTRO() {
        return $('.flex.flex-col.gap-2 > button:nth-child(7)');
    }
    get btnRO() {
        return $('.flex.flex-col.gap-2 > button:nth-child(8)');
    } 
    get btnUbahData () {
        return $('.flex.flex-wrap');
    }
    get btnUbahDataRO () {
        return $$('.flex.flex-wrap.items-center.justify-center')[2];
    }
    get btnUbahDataTRO () {
        return $$('.flex.flex-wrap.items-center.justify-center')[1];
    }
    get BtnBatal () {
        return $('button.btn.text-white.btn-error.btn-sm');
    }
    get BtnBatalTRO () {
        return $$('button.btn.text-white.btn-error.btn-sm')[1];
    }
    get btnCVReady () {
        return $('.btn-success');
    }
    get btnTambah () {
        return $('.flex.flex-row.flex-wrap.gap-4 > button');
    }
    get btnHapus () {
        return $('.flex.flex-row.flex-wrap.gap-4 > button:nth-child(2)');
    }
    get btnUpdateStatusFail () {
        return $('.flex.flex-wrap > button');
    }
    get btnUpdateStatusPass () {
        return $('.flex.flex-wrap > button:nth-child(2)');
    }
    get btnBlacklist () {
        return $('.flex.flex-wrap.items-center.justify-center > button');
    }
    get btnAvailability () {
        return $('.flex.flex-wrap.items-center.justify-center > button:nth-child(2)');
    }
    get btnFailRO () {
        return $('.flex.flex-wrap.items-center.justify-center > button:nth-child(3)');
    }
    get btnPassRO () {
        return $('.flex.flex-wrap.items-center.justify-center > button:nth-child(4)');
    }
    // untuk fungsionalitas update resume data personal
    get btnGenerateID () {
        return $('.flex.flex-col.flex-wrap.items-stretch > button');
    }
    get btnChooseFile () {
        return $$('.file-input.w-auto');
    }
    get formTextDataPersonal () {
        return $$('.input.w-full.flex.items-center.gap-2.input-bordered > input');
    }
    get formOptionDataPersonal () {
        return $$('.select.w-full.select-bordered');
    }
    get formDate () {
        return $('input[name="tanggalLahir"]');
    }
    get formAlamatApplicantKTP () {
        return $('textarea[name=alamatSesuaiIdentitas]');
    }
    get formAlamatApplicantDomisili () {
        return $('textarea[name=alamat]');
    }
    /**
     * a method to encapsulate automation code to interact with the page
     * e.g. to login using username and password
     */
    // untuk tampilan semua yang ada di update resume
    async clickBtnSubmit() {
        await this.btnSubmit.click();
    }
    async clickUpdateResume() {
        await this.btnDropdown.click();
        await this.btnUpdateResume.click();
    }
    async clickDataPersonal(){
        await this.btnDataPersonal.click();
    }
    async clickPendidikan(){
        await this.btnPendidikan.click();
    }
    async clickPengalamanKerja(){
        await this.btnPengalaman.click();
    }
    async clickProject(){
        await this.btnProject.click();
    }
    async clickPelatihan(){
        await this.btnPelatihan.click();
    }
    async clickSertifikasi(){
        await this.btnSertifikasi.click();
    }
    async clickTRO(){
        await this.btnTRO.click();
    }
    async clickRO(){
        await this.btnRO.click();
    }
    async clickCVReady(){
        await this.btnCVReady.click();
    }
    async clickBtnUbahData(){
        await this.btnUbahData.click();
    }
    async clickBtnUbahDataTRO(){
        const buttonUbahDataTRO = await this.btnUbahDataTRO.$('button');
        await buttonUbahDataTRO.click();
    }
    async clickBtnUbahDataRO(){
        const buttonUbahDataRO = await this.btnUbahDataRO.$('button');
        await buttonUbahDataRO.click();
    }
    async clickBtnTambahData(){
        await this.btnTambah.click();
    }
    async clickBtnHapusData(){
        await this.btnHapus.click();
    }
    async clickBtnBatal(){
        await this.BtnBatal.click();
    }
    async clickBtnBatalTRO(){
        await this.BtnBatalTRO.click();
    }
    async clickBtnUpdateStatusFail(){
        await this.btnUpdateStatusFail.click();
    }
    async clickBtnUpdateStatusPass(){
        await this.btnUpdateStatusPass.click();
    }
    async clickBtnBlacklist(){
        await this.btnBlacklist.click();
    }
    async clickBtnAvailability(){
        await this.btnAvailability.click();
    }
    async clickBtnFailRO(){
        await this.btnFailRO.click();
    }
    async clickBtnPassRO(){
        await this.btnPassRO.click();
    }

    //untuk update resume - data personal
    async clickBtnGenerateID(){
        await this.btnGenerateID.click();
    }
    async clickChooseFileProfile(filePath){
        const inputFile = await this.btnChooseFile[0];
        await inputFile.waitForDisplayed();
        await inputFile.setValue(filePath);
    }
    async clickChooseFileResume(filePath){
        const inputFile = await this.btnChooseFile[1];
        await inputFile.waitForDisplayed();
        await inputFile.setValue(filePath);
    }
    async clickChooseFileIjazah(filePath){
        const inputFile = await this.btnChooseFile[2];
        await inputFile.waitForDisplayed();
        await inputFile.setValue(filePath);
    }
    async clickChooseFileTransrip(filePath){
        const inputFile = await this.btnChooseFile[3];
        await inputFile.waitForDisplayed();
        await inputFile.setValue(filePath);
    }
    async clickChooseFileDPendukung(filePath){
        const inputFile = await this.btnChooseFile[4];
        await inputFile.waitForDisplayed();
        await inputFile.setValue(filePath);
    }
    async inputNamaDataPersonal(nama){
        await this.formTextDataPersonal[1].setValue(nama);
    }
    async inputEmailDataPersonal(email){
        await this.formTextDataPersonal[2].setValue(email);
    }
    async inputNomorIdentitasDataPersonal(nomor){
        await this.formTextDataPersonal[3].setValue(nomor);
    }
    async inputNomorHPDataPersonal(nomor){
        await this.formTextDataPersonal[4].setValue(nomor);
    }
    async inputIdentitasDataPersonal(n){
        await this.formOptionDataPersonal[0].selectByIndex(n)
    }
    async inputDateOfBirth(date) {
        await browser.execute(() => {
            const dateInput = document.querySelector('input[name="tanggalLahir"]');
            dateInput.setAttribute('type', 'text');
        });
        await this.formDate.setValue(date)
    }
    async inputAlamatApplicantKTP(alamat){
        await this.formAlamatApplicantKTP.setValue(alamat)
    }
    async inputAlamatApplicantDomisili(alamat){
        await this.formAlamatApplicantDomisili.setValue(alamat)
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('applicant/list');
    }
}

export default new resume();
    