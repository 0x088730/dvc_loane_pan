<template>
    <div class="flex justify-center">
        <div class="flex shadow-lg w-1/2 sm:w-3/4">
            <!-- Setting Value -->
            <div class="w-1/3 bg-gray-100 p-4 rounded-tl-[20px] rounded-bl-[20px]">
                <div>
                    <label class="block mb-2 font-bold text-gray-700" for="country">
                        DVC Sales Customer?
                    </label>
                    <div class="relative">
                        <select id="country" v-model="selectedOption"
                            class="appearance-none py-2 pl-3 w-full pr-8 rounded leading-tight focus:outline-none focus:shadow-outline border-gray-300">
                            <option value="animalKingdom">Animal Kingdom</option>
                            <option value="aulani">Aulani</option>
                            <option value="bayLakeTower">Bay Lake Tower</option>
                            <option value="beachClub">Beach Club</option>
                            <option value="boardwark">Boardwark</option>
                            <option value="boulderRidge">Boulder Ridge</option>
                            <option value="copperCreek">Copper Creek</option>
                            <option value="grandCa">Grand Ca</option>
                            <option value="grandFloridian">Grand Floridian</option>
                            <option value="hiltonHead">Hilton Head</option>
                            <option value="oldKeyWest">Old Key West</option>
                            <option value="oldKeyWest2057">Old Key West (2057)</option>
                            <option value="polynesian">Polynesian</option>
                            <option value="riviera">Riviera</option>
                            <option value="saratogaSprings">Saratoga Springs</option>
                            <option value="veroBeach">Vero Beach</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <i class="fas fa-angle-down"></i>
                        </div>
                    </div>
                </div>
                <br>
                <div class="w-full flex">
                    <div class="flex w-1/2 items-center justify-center">
                        <div class="relative w-full">
                            <input type="number" id="quantity" name="quantity" min="0" max="10"
                                placeholder="Number of Points" v-model="numberpoint" class="p-2 w-full border rounded-md">
                        </div>
                    </div>
                    <div class="flex w-1/2 items-center justify-center">

                        <div class="relative w-full">
                            <input type="number" id="quantity" name="quantity" min="0" max="10" placeholder="$"
                                v-model="perpoint" class="p-2 w-full border rounded-md">
                        </div>
                    </div>

                </div>
                <div class="mt-4 ml-2 text-gray-500">
                    Purchase Price of Contract: $ {{ purchaseprice = numberpoint * perpoint }}
                </div>
                <br />
                <div class="flex justify-between">
                    <div>Deposit Paid when you <br />signed the contract</div>
                    <div>
                        <input type="number" id="quantity" name="quantity" min="0" max="10" placeholder="Price per point"
                            v-model="depositpaid" class="p-2 w-[100px] border rounded-md">
                    </div>
                </div>
                <br>
                <div class="flex justify-between">
                    <div class="text-[14px] self-center">Annual Dues to <br> pay at closing&nbsp;</div>
                    <div><input type="number" id="quantity" name="quantity" min="0" max="10" placeholder="Price per point"
                            v-model="fromAnnualDue" class="p-1 w-[100px] border rounded-md"></div>
                    <div class="text-[14px] self-center">or</div>
                    <div><input type="number" id="quantity" name="quantity" min="0" max="10" placeholder="Price per point"
                            v-model="toAnnualDue" class="p-1 w-[100px] border rounded-md"></div>
                </div>
                <br>
                <!-- Finance Term (Years) Slider -->
                <div class="flex justify-between items-center">
                    <div>
                        Finance Term (Years)
                    </div>
                    <div>
                        <span><font-awesome-icon class="text-[34px] cursor-pointer"
                                :icon="['fa', 'fa-caret-left']" /></span>
                        <span><font-awesome-icon class="text-[34px] cursor-pointer"
                                :icon="['fa', 'fa-caret-right']" /></span>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="range" class="slider-range w-full" :min="min" :max="max" :step="step" :value="value"
                            @input="updateValue($event.target.value)">
                        <div class="flex justify-between mx-1">
                            <div class="" v-for="item in items" :key="item.id" :data="item">
                                {{ item.id }}
                            </div>
                        </div>

                    </div>
                </div>
                <br>
                <!-- Down Payment Slider -->
                <div>
                    <div class="flex justify-between items-center">
                        <div>
                            <div class="text-[16px]">
                                Down Payment
                            </div>
                            <div class="text-[14px]">
                                Tell us how much of a down <br /> payment you're comfortable with
                            </div>
                        </div>
                        <!-- @click="isShowDetail[index] = !isShowDetail[index]">
                      Show details <font-awesome-icon :icon="['fa', 'fa-chevron-' + (isShowDetail[index] ? 'up' : 'down')]" -->
                        <div class="mt-[20px]">
                            <span @click="updateDownArrowValue1('0', $event)"><font-awesome-icon
                                    class="text-[34px] cursor-pointer" :icon="['fa', 'fa-caret-left']" /></span>
                            <span @click="updateDownArrowValue('0', $event)"><font-awesome-icon
                                    class="text-[34px] cursor-pointer" :icon="['fa', 'fa-caret-right']" /></span>
                        </div>
                    </div>
                    <div>
                        <input type="range" class="slider-range w-full" :min="minDown" :max="maxDown" :step="stepDown"
                            v-model="rangeValue" @input="updateDownValue(0, $event.target.value)">
                        <div class="flex justify-between">
                            <div class="" v-for="item in DownItems" key="item.id" :data="item">
                                {{ item.name }}
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <!-- Optional Credit Check -->
                <div>
                    <div class="text-[16px]">
                        Optional Credit Check
                    </div>
                    <div class="text-[14px]">
                        Share your credit score with us to quality for<br /> potential savings
                    </div>
                    <br>
                    <div class="flex justify-between">
                        <div class="text-[12px] border-1 border-gray-600 m-1 rounded-1 px-1"
                            v-for="(item, index) in CreditOptions" :key="index" :data="item"
                            :class="{ 'activeBtn': index === BlueIndex }">
                            {{ item.name }}
                        </div>
                    </div>
                    <!-- DVC Sales Contract -->
                    <div class="mt-[20px]">
                        <div>
                            Did you purchase this contract from DVC Sales?
                        </div>
                        <div class="flex justify-center">
                            <span class="bg-blue-900 text-white px-4 py-2 mx-2 rounded-lg">Yes</span><span
                                class="text-black border-gray-700 border-1 px-4 py-2 mx-2 rounded-lg">No</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Explaination Resort -->
            <div class="w-2/3 bg-gray-100 p-4 rounded-tr-[20px] rounded-br-[20px] flex justify-around">
                <div class="w-full">
                    <div class="p-2 flex gap-10">
                        <div v-for="(item, index) in CreditCheckOptions" class="w-1/2">
                            <div class="bg-blue-900 text-[20px] text-white font-bold p-3 rounded-t-[20px]">{{ item.title }}
                            </div>
                            <div class="p-3 bg-white flex flex-col gap-2">
                                <div class="flex justify-between items-center">
                                    <span>Your Estimated Monthly Payment:</span>
                                    <span>${{ item.estimated }}</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span>Interest Rate:</span>
                                    <span>{{ item.interestRate }}%</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span>Loan Term:</span>
                                    <span>${{ currentLoanTerm }} Years</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span>Down Payment:</span>
                                    <span>${{ currentDownValue[index] }} ({{ item.downPaymentPercent }}%)</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span>Total Loan Amount:</span>
                                    <span>${{ totalLoanAmount[index] = !purchaseprice ? 0 : purchaseprice -
                                        currentDownValue[index]
                                    }}</span>
                                </div>
                                <div class="flex justify-between font-bold items-center">
                                    <span>Estimated Cash to Close:</span>
                                    <span>${{ item.cashToClose }}</span>
                                </div>
                                <div class="text-right cursor-pointer" :class="{ 'mb-[30px]': !isShowDetail[index] }"
                                    @click="isShowDetail[index] = !isShowDetail[index]">
                                    Show details <font-awesome-icon
                                        :icon="['fa', 'fa-chevron-' + (isShowDetail[index] ? 'up' : 'down')]" />
                                </div>
                                <div v-if="isShowDetail[index]"
                                    class="border-gray-200 border-[10px] flex flex-col gap-2 p-2 mb-5">
                                    <div class="flex justify-between items-center">
                                        <span>Down Payment</span>
                                        <span>${{ item.downPayment }}</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span>Loan Origination Fee</span>
                                        <span>${{ item.originationFee }}</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span>Total Title Company Closing Costs</span>
                                        <span>${{ item.titleCompanyFee }}</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span>Additional Financing Fees</span>
                                        <span>${{ item.addFinancingFee }}</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span>- Lender Policy Fee</span>
                                        <span>${{ item.lenderPolFee }}</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span>- Mortgage Recording Fees</span>
                                        <span>${{ item.motaRecordFee }}</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span>Deposit You Gave to Your Broker</span>
                                        <span>${{ item.depositBroker }}</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span>Annual Due at Closing</span>
                                        <span>${{ item.annualDue }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-center -mt-[30px]">
                                <div class="bg-red-700 px-5 py-3 text-white text-[20px] rounded-[40px]">
                                    Apply Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronUp, faChevronDown, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { mapGetters } from 'vuex';
library.add(faChevronUp, faChevronDown, faCaretLeft, faCaretRight);
export default {
    name: 'SliderRange',
    components: {
        FontAwesomeIcon
    },
    props: {
        min: {
            type: Number,
            default: 1
        },
        max: {
            type: Number,
            default: 10
        },
        minDown: {
            type: Number,
            default: 1000
        },
        maxDown: {
            type: Number,
            default: 10000
        },
        step: {
            type: Number,
            default: 1
        },
        stepDown: {
            type: Number,
            default: 1000
        },
        value: {
            type: Number,
            default: 1
        },
        // valueDown: {
        //   type: Number,
        //   default: 1000
        // },
        valueDown1: {
            type: Number,
            default: 0
        },
        valueLoan: {
            type: Number,
            default: 1000
        },
        valueLoan1: {
            type: Number,
            default: 0
        },
        showDetailCase: false
    },
    data() {
        return {
            scrollPosition: 0,
            purchaseprice: '',
            numberpoint: 0,
            perpoint: 0,
            depositpaid: 0,
            fromAnnualDue: 0,
            toAnnualDue: 0,
            sliderValue: 50,
            currentValue: this.value,
            currentDownValue: [this.rangeValue, this.valueDown1],
            totalLoanAmount: [this.valueLoan, this.valueLoan1],
            currentLoanTerm: 1,
            isShowDetail: [false, false],
            items: [
                { id: 1, name: "Item 1" },
                { id: 2, name: "Item 2" },
                { id: 3, name: "Item 3" },
                { id: 4, name: "Item 4" },
                { id: 5, name: "Item 5" },
                { id: 6, name: "Item 6" },
                { id: 7, name: "Item 7" },
                { id: 8, name: "Item 8" },
                { id: 9, name: "Item 9" },
                { id: 10, name: "Item 10" },
            ],
            DownItems: [
                { id: 1, name: "1k" },
                { id: 2, name: "2k" },
                { id: 3, name: "3k" },
                { id: 4, name: "4k" },
                { id: 5, name: "5k" },
                { id: 6, name: "6k" },
                { id: 7, name: "7k" },
                { id: 8, name: "8k" },
                { id: 9, name: "9k" },
                { id: 10, name: "10k" },
            ],
            CreditOptions: [
                { id: 1, name: 'No Credit Check' },
                { id: 2, name: 'Fair (600-)' },
                { id: 3, name: 'Good (650-)' },
                { id: 4, name: 'Great (700-)' },
                { id: 5, name: 'Excellent (800-)' },
            ],
            CreditCheckOptions: [
                {
                    id: 1,
                    title: 'No Credit Check Option',
                    estimated: 156,
                    interestRate: 12.9,
                    loanTerm: 10,
                    downPayment: 0,
                    downPaymentPercent: 5,
                    cashToClose: 2562.19,
                    originationFee: 199,
                    titleCompanyFee: 759,
                    addFinancingFee: 123,
                    lenderPolFee: 25,
                    motaRecordFee: 35,
                    depositBroker: 0,
                    annualDue: 880.99
                },
                {
                    id: 2,
                    title: 'Credit Check Option',
                    estimated: 156,
                    interestRate: 12.9,
                    loanTerm: 10,
                    downPayment: 0,
                    downPaymentPercent: 5,
                    cashToClose: 2562.19,
                    originationFee: 199,
                    titleCompanyFee: 759,
                    addFinancingFee: 123,
                    lenderPolFee: 25,
                    motaRecordFee: 35,
                    depositBroker: 0,
                    annualDue: 880.99
                },

            ],
            BlueIndex: 0,
            rangeValue: 1000
        };
    },
    computed: {
        ...mapGetters([
            'getData'
        ]),
        data() {
            return this.getData;
        }
    },

    methods: {
        updateValue: function (value) {
            this.currentLoanTerm = value;
        },
        updateDownValue: function (index, value) {
            console.log(value)
            console.log('rangeValue', this.rangeValue)
            this.currentDownValue[index] = value;
        },
        updateDownArrowValue: function (index, value) {
            if (this.rangeValue < 10000) {
                this.rangeValue = parseInt(this.rangeValue) + 1000;
                this.currentDownValue[index] = this.rangeValue;
            }
        },
        updateDownArrowValue1: function (index, value) {
            if (this.rangeValue >= 1000) {
                this.rangeValue = parseInt(this.rangeValue) - 1000;
                this.currentDownValue[index] = this.rangeValue;
            }
        }
    },
};
</script>

<style>
.slider-range {
    width: 100%;
    height: 2px;
    border-radius: 5px;
    background: #2573e7;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
}

.slider-range:hover {
    opacity: 1;
}

.slider-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4B5563;
    cursor: pointer;
    transition: background .2s;
}

.slider-range::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4B5563;
    cursor: pointer;
    transition: background .2s;
}

.value {
    margin-top: 10px;
    font-size: 14px;
    text-align: center;
    color: #4B5563;
}

.activeBtn {
    background-color: rgb(40, 40, 85);
    color: white
}
</style>