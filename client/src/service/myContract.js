export const surveyABI = [
    {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        name: 'addUser',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'address',
                name: '',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'address',
                name: '',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        name: 'recordVPList',
        type: 'event'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_surveyId',
                type: 'uint256'
            },
            {
                internalType: 'string',
                name: '_publicKey',
                type: 'string'
            }
        ],
        name: 'companyEncrptPublic',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        name: 'companyPublic',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_surveyId',
                type: 'uint256'
            },
            {
                internalType: 'string',
                name: '_VPData',
                type: 'string'
            },
            {
                internalType: 'address',
                name: '_company',
                type: 'address'
            }
        ],
        name: 'recordVP',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            },
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        name: 'surveyUser',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            },
            {
                internalType: 'address',
                name: '',
                type: 'address'
            },
            {
                internalType: 'address',
                name: '',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        name: 'whoCallVP',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }
]

export const issuerABI = [
    {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'string',
                name: '',
                type: 'string'
            },
            {
                indexed: false,
                internalType: 'address',
                name: '',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        name: 'Approval',
        type: 'event'
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '_surveyUser',
                type: 'string'
            },
            {
                internalType: 'string',
                name: '_VCName',
                type: 'string'
            }
        ],
        name: 'approval',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        name: 'encryptForCompany',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_VCsNum',
                type: 'uint256'
            },
            {
                internalType: 'string',
                name: '_encrypt',
                type: 'string'
            }
        ],
        name: 'forCompany',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        name: 'verificationRecodes',
        outputs: [
            {
                internalType: 'uint256',
                name: 'VCsNum',
                type: 'uint256'
            },
            {
                internalType: 'string',
                name: 'surveyUser',
                type: 'string'
            },
            {
                internalType: 'address',
                name: 'surveyCompany',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: 'time',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }
]
