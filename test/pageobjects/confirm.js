import { $, browser } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Confirm extends Page {
    /**
     * define selectors using getter methods
     */
    //untuk tampilan semua update resume
    get checkProfil () {
        return $('img[alt="profile_img"]');
    }
    get checkStatus() {
        return $('[role="status"]');
    }
    get checkBtnBatal () {
        return $('button.btn.text-white.btn-error.btn-sm');
    }
    get checkBtnSubmit () {
        return $('button.btn.text-white.btn-primary.btn-sm[type="submit"]');
    }
    get checkUploadProfil () {
        return $('.flex.flex-col.flex-wrap.gap-4 > label > input');
    }
    get btnGenerateID () {
        return $('.flex.flex-col.flex-wrap.items-stretch > button');
    }
    get sectionBtn () {
        return $('.flex.flex-row.flex-wrap.gap-4');
    }
    get jumlahData () {
        return $$('.overflow-auto.no-scrollbar.gap-6.flex.flex-col > .card.bg-base-100.shadow.w-full').length;
    }
    get btnUpdateStatPelamar () {
        return $('.flex.flex-wrap');
    }
    get notesTRO () {
        return $$('.flex.flex-wrap.items-center.justify-center')[1];
    }
    get btnNeedUpdateCV () {
        return $('.btn.text-white.btn-info.btn-sm');
    }
    get btnUbahDataRO () {
        return $$('.flex.flex-wrap.items-center.justify-center')[2];
    }
    //untuk update resume - data personal
    get checkGenerateID () {
        return $('.input.w-full.flex.items-center.gap-2.input-bordered > input');
    }
    get namaApplicant () {
        return $$('.input.w-full.flex.items-center.gap-2.input-bordered > input')[1].getValue();
    }
    get emailApplicant () {
        return $$('.input.w-full.flex.items-center.gap-2.input-bordered > input')[2].getValue();
    }
    get nomorIdentitasApplicant () {
        return $$('.input.w-full.flex.items-center.gap-2.input-bordered > input')[3].getValue();
    }
    get nomorHPApplicant () {
        return $$('.input.w-full.flex.items-center.gap-2.input-bordered > input')[4].getValue();
    }
    get typeIdentitasApplicant () {
        return $('select[name="jenisIdentitas"]').$('option:checked');
    }
    get lengthTypeIdentitasApplicant () {
        const selectElement = $('select[name="jenisIdentitas"]');
        const options = selectElement.$$('option');
        return options.length;
    }
    get alamatapplicantKTP () {
        return $('textarea[name=alamatSesuaiIdentitas]');
    }
    get alamatapplicantDomisili () {
        return $('textarea[name=alamat]');
    }
    get birthDate () {
        return $('input[name="tanggalLahir"]');
    }
    //untuk semua tampilan update resume
    async getAttProfil() {
        return await this.checkProfil.getAttribute('src')
    }
    async waitForProfileSrc() {
        await browser.waitUntil(
            async () => {
                const src = await this.getAttProfil();
                return src && src !== '';
            },
            {
                timeout: 3000,
                timeoutMsg: 'Atribut src dari elemen profil tidak tersedia dalam waktu yang ditentukan'
            }
        )
    }
    async getNotesTRO() {
        const button = await this.notesTRO.$('div');
        return button;
    }
    async getBtnBatalRO() {
        const buttonBatal = await this.btnUbahDataRO.$('section > button');
        return buttonBatal;
    }
    async getBtnSubmitRO() {
        const buttonSubmit = await this.btnUbahDataRO.$('section > button:nth-child(2)');
        return buttonSubmit;
    }
    async statusRO() {
        const buttonRO = await this.btnUbahDataRO.$('div');
        return buttonRO;
    }
    //untuk update resume - data personal
    async getValueGenerateID() {
        return await this.checkGenerateID.getValue()
    }
    async waitForNumberIDPSM() {
        await browser.waitUntil(
            async () => {
                const IDPSM = await this.getValueGenerateID();
                return IDPSM && IDPSM !== '';
            },
            {
                timeout: 5000,
                timeoutMsg: 'ID tidak ter-Generate dalam waktu yang ditentukan'
            }
        )
    }
    async getSelectedIdentityTypeText() {
        return await this.typeIdentitasApplicant.getText();
    }
    async getAlamatKTPText() {
        return await this.alamatapplicantKTP.getValue();
    }
    async getAlamatDomisiliText() {
        return await this.alamatapplicantDomisili.getValue();
    }
    async getBirthDate() {
        return await this.birthDate.getValue();
    }
}

export default new Confirm();
