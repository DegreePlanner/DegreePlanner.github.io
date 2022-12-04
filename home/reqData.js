majorReqData = {
    "Majors":
        [
        {
            "Major": "Computer Science General Track",
            "College": "CLAS",
            "reqcourses":
                [
                    {
                        "code": "CSC 110",
                        "credits": "3",
                        "prerequisites": {
                            "req": null,
                            "options": [
                                {
                                    "courses": [
                                        {
                                            "code": "MTH 105",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "MTH 210",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        }
                                    ],
                                    "Select": 1
                                }

                            ]
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 120",
                        "credits": "3",
                        "prerequisites": {
                            "req": [{
                                "code": "CSC 110",
                                "allow_concurrent": false,
                                "minimum_grade": ""
                            }],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 130",
                        "credits": "3",
                        "prerequisites": {
                            "req": [{
                                "code": "CSC 120",
                                "allow_concurrent": false,
                                "minimum_grade": ""
                            }],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 140",
                        "credits": "3",
                        "prerequisites": {
                            "req": null,
                            "options": [
                                {
                                    "courses": [
                                        {
                                            "code": "MTH 105",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "MTH 210",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        }
                                    ],
                                    "Select": 1
                                }

                            ]
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 150",
                        "credits": "3",
                        "prerequisites": {
                            "req": null,
                            "options": [
                                {
                                    "courses": [
                                        {
                                            "code": "CMP 120",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "CMP 125",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "BHP 100",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "BHP 150",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        }
                                    ],
                                    "Select": 1
                                }

                            ]
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 200",
                        "credits": "3",
                        "prerequisites": {
                            "req": [{
                                "code": "CSC 120",
                                "allow_concurrent": false,
                                "minimum_grade": ""
                            }],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 220",
                        "credits": "3",
                        "prerequisites": {
                            "req": [
                                {
                                    "code": "CSC 130",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                },
                                {
                                    "code": "CSC 140",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                },
                            ],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 230",
                        "credits": "3",
                        "prerequisites": {
                            "req": [{
                                "code": "MTH 211",
                                "allow_concurrent": true,
                                "minimum_grade": ""
                            }],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 350",
                        "credits": "3",
                        "prerequisites": {
                            "req": [
                                {
                                    "code": "CSC 130",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                },
                                {
                                    "code": "CSC 140",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                },
                            ],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "MTH 210",
                        "credits": "4",
                        "prerequisites": {
                            "req": null,
                            "options": [
                                {
                                    "courses": [
                                        "Math SAT of at least 650",
                                        "Math ACT score of at least 28",
                                        {
                                            "code": "MTH 105",
                                            "allow_concurrent": false,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "MTH 106",
                                            "allow_concurrent": false,
                                            "minimum_grade": "C"
                                        }
                                    ],
                                    "Select": 1
                                }

                            ]
                        },

                        "corequisites": null
                    },
                    {
                        "code": "MTH 211",
                        "credits": "4",
                        "prerequisites": {
                            "req": [{
                                "code": "MTH 210",
                                "allow_concurrent": false,
                                "minimum_grade": "C"
                            }],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "PHY 200",
                        "credits": "4",
                        "prerequisites": {
                            "req": [{
                                "code": "MTH 210",
                                "allow_concurrent": true,
                                "minimum_grade": ""
                            }],
                            "options": null
                        },
                        "corequisites": [
                            {
                                "code": "PHY 200L"
                            }
                        ]
                    },
                    {
                        "code": "PHY 201",
                        "credits": "4",
                        "prerequisites": {
                            "req": [
                                {
                                    "code": "PHY 200",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                },
                                {
                                    "code": "MTH 211",
                                    "allow_concurrent": true,
                                    "minimum_grade": ""
                                },
                            ],
                            "options": null
                        },
                        "corequisites": [
                            {
                                "code": "PHY 201L"
                            }
                        ]
                    }
                ],
            "options":
                [
                    {
                        "courses": [
                            {
                                "code": "CSC 240",
                                "credits": "3",
                                "prerequisites": {
                                    "req": [{
                                        "code": "CSC 130",
                                        "allow_concurrent": false,
                                        "minimum_grade": ""
                                    }],
                                    "options": null
                                },
                                "corequisites": null
                            },
                            {
                                "code": "CYB 200",
                                "credits": "3",
                                "prerequisites": {
                                    "req": [{
                                        "code": "CYB 130",
                                        "allow_concurrent": false,
                                        "minimum_grade": ""
                                    }],
                                    "options": null
                                },
                                "corequisites": null
                            },
                        ],
                        "Select": 2
                    },
                    {
                        "courses": [
                            {
                                "code": "CIS 270",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [{
                                        "code": "CIS 185",
                                        "allow_concurrent": false,
                                        "minimum_grade": ""
                                    }],
                                    "options": null
                                },
                                "corequisites": null
                            },
                            {
                                "code": "CSC 310",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [
                                        {
                                            "code": "CSC 130",
                                            "allow_concurrent": false,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "CSC 140",
                                            "allow_concurrent": false,
                                            "minimum_grade": ""
                                        },
                                    ],
                                    "options": null
                                },
                                "corequisites": null
                            },
                            {
                                "code": "CSC 320",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [
                                        {
                                            "code": "CSC 130",
                                            "allow_concurrent": false,
                                            "minimum_grade": ""
                                        }
                                    ],
                                    "options": null
                                },
                                "corequisites": null
                            },
                            {
                                "code": "CIS 330",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [{
                                        "code": "CIS 185",
                                        "allow_concurrent": false,
                                        "minimum_grade": ""
                                    }],
                                    "options": null
                                },
                                "corequisites": null
                            },
                            {
                                "code": "CSC 380",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [
                                        {
                                            "code": "CSC 220",
                                            "allow_concurrent": false,
                                            "minimum_grade": ""
                                        }
                                    ],
                                    "options": [
                                        {
                                            "courses": [
                                                {
                                                    "code": "CSC 240",
                                                    "allow_concurrent": false,
                                                    "minimum_grade": ""
                                                },
                                                {
                                                    "code": "CYB 200",
                                                    "allow_concurrent": false,
                                                    "minimum_grade": ""
                                                }
                                            ],
                                            "Select": 1
                                        },
                                    ]
                                },

                                "corequisites": null
                            },
                            {
                                "code": "CSC 490",
                                "credits": 3,
                                "prerequisites": null,
                                "corequisites": null
                            },
                            {
                                "code": "CSC 491",
                                "credits": 3,
                                "prerequisites": {
                                    "req": ["2.5 GPA and Permission of Instructor"],
                                    "options": null
                                },
                                "corequisites": null
                            }
                        ],
                        "Select": 2
                    },
                    {
                        "courses": [
                            {
                                "code": "CSC 301",
                                "credits": 3,
                                "prerequisites": null,
                                "corequisites": null
                            },
                            {
                                "code": "CSC 340",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [{
                                        "code": "CSC 150",
                                        "allow_concurrent": false,
                                        "minimum_grade": ""
                                    }],
                                    "options": null
                                },
                                "corequisites": null
                            },
                            {
                                "code": "CSC 360",
                                "credits": 3,
                                "prerequisites": null,
                                "corequisites": null
                            },
                            {
                                "code": "CSC 390",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [{
                                        "code": "CSC 200",
                                        "allow_concurrent": false,
                                        "minimum_grade": ""
                                    }],
                                    "options": null
                                },
                                "corequisites": null
                            }
                        ],
                        "Select": 2
                    },
                    {
                        "courses": [
                            {
                                "code": "CSC 400",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [
                                        {
                                            "code": "MTH 240",
                                            "allow_concurrent": false,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "CSC 360",
                                            "allow_concurrent": false,
                                            "minimum_grade": ""
                                        },
                                    ],
                                    "options": null
                                },
                                "corequisites": null
                            },
                            {
                                "code": "CSC 410",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [
                                        {
                                        "code": "CSC 360",
                                        "allow_concurrent": false,
                                        "minimum_grade": ""
                                    }],
                                    "options": null
                                },
                                "corequisites": null
                            },
                            {
                                "code": "CSC 420",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [
                                        {
                                        "code": "CSC 200",
                                        "allow_concurrent": false,
                                        "minimum_grade": ""
                                    }],
                                    "options": null
                                },
                                "corequisites": null
                            },
                            {
                                "code": "CSC 430",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [
                                        {
                                        "code": "CSC 420",
                                        "allow_concurrent": false,
                                        "minimum_grade": ""
                                    }],
                                    "options": null
                                },
                                "corequisites": null
                            },
                            {
                                "code": "CSC 470",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [
                                        {
                                        "code": "CSC 360",
                                        "allow_concurrent": false,
                                        "minimum_grade": ""
                                    }],
                                    "options": null
                                },
                                "corequisites": null
                            }
                        ],
                        "Select": 2
                    }
                ]
        },
        {
            "Major": "Computer Science Cyber Security Track",
            "College": "CLAS",
            "reqcourses":
                [
                    {
                        "code": "CSC 110",
                        "credits": "3",
                        "prerequisites": {
                            "req": null,
                            "options": [
                                {
                                    "courses": [
                                        {
                                            "code": "MTH 105",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "MTH 210",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        }
                                    ],
                                    "Select": 1
                                }

                            ]
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 120",
                        "credits": "3",
                        "prerequisites": {
                            "req": [{
                                "code": "CSC 110",
                                "allow_concurrent": false,
                                "minimum_grade": ""
                            }],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 130",
                        "credits": "3",
                        "prerequisites": {
                            "req": [{
                                "code": "CSC 120",
                                "allow_concurrent": false,
                                "minimum_grade": ""
                            }],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 140",
                        "credits": "3",
                        "prerequisites": {
                            "req": null,
                            "options": [
                                {
                                    "courses": [
                                        {
                                            "code": "MTH 105",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "MTH 210",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        }
                                    ],
                                    "Select": 1
                                }

                            ]
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 150",
                        "credits": "3",
                        "prerequisites": {
                            "req": null,
                            "options": [
                                {
                                    "courses": [
                                        {
                                            "code": "CMP 120",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "CMP 125",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "BHP 100",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "BHP 150",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        }
                                    ],
                                    "Select": 1
                                }

                            ]
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 200",
                        "credits": "3",
                        "prerequisites": {
                            "req": [
                                {
                                "code": "CSC 120",
                                "allow_concurrent": false,
                                "minimum_grade": ""
                            }],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 220",
                        "credits": "3",
                        "prerequisites": {
                            "req": [
                                {
                                    "code": "CSC 130",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                },
                                {
                                    "code": "CSC 140",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                },
                            ],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 230",
                        "credits": "3",
                        "prerequisites": {
                            "req": [{
                                "code": "MTH 211",
                                "allow_concurrent": true,
                                "minimum_grade": ""
                            }],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 350",
                        "credits": "3",
                        "prerequisites": {
                            "req": [
                                {
                                    "code": "CSC 130",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                },
                                {
                                    "code": "CSC 140",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                },
                            ],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "MTH 210",
                        "credits": "4",
                        "prerequisites": {
                            "req": null,
                            "options": [
                                {
                                    "courses": [
                                        "Math SAT of at least 650",
                                        "Math ACT score of at least 28",
                                        {
                                            "code": "MTH 105",
                                            "allow_concurrent": false,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "MTH 106",
                                            "allow_concurrent": false,
                                            "minimum_grade": "C"
                                        }
                                    ],
                                    "Select": 1
                                }

                            ]
                        },

                        "corequisites": null
                    },
                    {
                        "code": "MTH 211",
                        "credits": "4",
                        "prerequisites": {
                            "req": [{
                                "code": "MTH 210",
                                "allow_concurrent": false,
                                "minimum_grade": "C"
                            }],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "PHY 200",
                        "credits": "4",
                        "prerequisites": {
                            "req": [{
                                "code": "MTH 210",
                                "allow_concurrent": true,
                                "minimum_grade": ""
                            }],
                            "options": null
                        },
                        "corequisites": [
                            {
                                "code": "PHY 200L"
                            }
                        ]
                    },
                    {
                        "code": "PHY 201",
                        "credits": "4",
                        "prerequisites": {
                            "req": [
                                {
                                    "code": "PHY 200",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                },
                                {
                                    "code": "MTH 211",
                                    "allow_concurrent": true,
                                    "minimum_grade": ""
                                },
                            ],
                            "options": null
                        },
                        "corequisites": [
                            {
                                "code": "PHY 201L"
                            }
                        ]
                    },
                    {
                        "code": "CYB 240",
                        "credits": 3,
                        "prerequisites": {
                            "req": [
                                {
                                    "code": "CIS 270",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                }
                            ],
                            "options": [
                                {
                                    "courses": [
                                        {
                                            "code": "CYB 200",
                                            "allow_concurrent": false,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "CSC 240",
                                            "allow_concurrent": false,
                                            "minimum_grade": ""
                                        }
                                    ],
                                    "Select": 1
                                }

                            ]
                        },

                        "corequisites": null
                    },
                    {
                        "code": "CSC 250",
                        "credits": 3,
                        "prerequisites": {
                            "req": [
                                {
                                    "code": "CSC 200",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                }],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CYB 260",
                        "credits": 3,
                        "prerequisites": {
                            "req": [
                                {
                                    "code": "CSC 240",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                }],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 340",
                        "credits": 3,
                        "prerequisites": {
                            "req": [
                                {
                                    "code": "CSC 150",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                }],
                            "options": null
                        },
                        "corequisites": null
                    }
                ],
            "options":
                [
                    {
                        "courses": [
                            {
                                "code": "CSC 240",
                                "credits": "3",
                                "prerequisites": {
                                    "req": [{
                                        "code": "CSC 130",
                                        "allow_concurrent": false,
                                        "minimum_grade": ""
                                    }],
                                    "options": null
                                },
                                "corequisites": null
                            },
                            {
                                "code": "CYB 200",
                                "credits": "3",
                                "prerequisites": {
                                    "req": [{
                                        "code": "CYB 130",
                                        "allow_concurrent": false,
                                        "minimum_grade": ""
                                    }],
                                    "options": null
                                },
                                "corequisites": null
                            },
                        ],
                        "Select": 2
                    },
                    {
                        "courses": [
                            {
                                "code": "CIS 270",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [{
                                        "code": "CIS 185",
                                        "allow_concurrent": false,
                                        "minimum_grade": ""
                                    }],
                                    "options": null
                                },
                                "corequisites": null
                            },
                            {
                                "code": "CSC 310",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [
                                        {
                                            "code": "CSC 130",
                                            "allow_concurrent": false,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "CSC 140",
                                            "allow_concurrent": false,
                                            "minimum_grade": ""
                                        },
                                    ],
                                    "options": null
                                },
                                "corequisites": null
                            },
                            {
                                "code": "CSC 320",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [
                                        {
                                            "code": "CSC 130",
                                            "allow_concurrent": false,
                                            "minimum_grade": ""
                                        }
                                    ],
                                    "options": null
                                },
                                "corequisites": null
                            },
                            {
                                "code": "CIS 330",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [{
                                        "code": "CIS 185",
                                        "allow_concurrent": false,
                                        "minimum_grade": ""
                                    }],
                                    "options": null
                                },
                                "corequisites": null
                            },
                            {
                                "code": "CSC 380",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [
                                        {
                                            "code": "CSC 220",
                                            "allow_concurrent": false,
                                            "minimum_grade": ""
                                        }
                                    ],
                                    "options": [
                                        {
                                            "courses": [
                                                {
                                                    "code": "CSC 240",
                                                    "allow_concurrent": false,
                                                    "minimum_grade": ""
                                                },
                                                {
                                                    "code": "CYB 200",
                                                    "allow_concurrent": false,
                                                    "minimum_grade": ""
                                                }
                                            ],
                                            "Select": 1
                                        },
                                    ]
                                },

                                "corequisites": null
                            },
                            {
                                "code": "CSC 490",
                                "credits": 3,
                                "prerequisites": null,
                                "corequisites": null
                            },
                            {
                                "code": "CSC 491",
                                "credits": 3,
                                "prerequisites": {
                                    "req": ["2.5 GPA and Permission of Instructor"],
                                    "options": null
                                },
                                "corequisites": null
                            }
                        ],
                        "Select": 2
                    }
                ]
        },
        {
            "Major": "Computer Science Artificial Intelligence Track",
            "College": "CLAS",
            "reqcourses":
                [
                    {
                        "code": "CSC 110",
                        "credits": "3",
                        "prerequisites": {
                            "req": null,
                            "options": [
                                {
                                    "courses": [
                                        {
                                            "code": "MTH 105",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "MTH 210",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        }
                                    ],
                                    "Select": 1
                                }

                            ]
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 120",
                        "credits": "3",
                        "prerequisites": {
                            "req": [{
                                "code": "CSC 110",
                                "allow_concurrent": false,
                                "minimum_grade": ""
                            }],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 130",
                        "credits": "3",
                        "prerequisites": {
                            "req": [{
                                "code": "CSC 120",
                                "allow_concurrent": false,
                                "minimum_grade": ""
                            }],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 140",
                        "credits": "3",
                        "prerequisites": {
                            "req": null,
                            "options": [
                                {
                                    "courses": [
                                        {
                                            "code": "MTH 105",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "MTH 210",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        }
                                    ],
                                    "Select": 1
                                }

                            ]
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 150",
                        "credits": "3",
                        "prerequisites": {
                            "req": null,
                            "options": [
                                {
                                    "courses": [
                                        {
                                            "code": "CMP 120",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "CMP 125",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "BHP 100",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "BHP 150",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        }
                                    ],
                                    "Select": 1
                                }

                            ]
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 200",
                        "credits": "3",
                        "prerequisites": {
                            "req": [{
                                "code": "CSC 120",
                                "allow_concurrent": false,
                                "minimum_grade": ""
                            }],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 220",
                        "credits": "3",
                        "prerequisites": {
                            "req": [
                                {
                                    "code": "CSC 130",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                },
                                {
                                    "code": "CSC 140",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                },
                            ],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 230",
                        "credits": "3",
                        "prerequisites": {
                            "req": [{
                                "code": "MTH 211",
                                "allow_concurrent": true,
                                "minimum_grade": ""
                            }],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 350",
                        "credits": "3",
                        "prerequisites": {
                            "req": [
                                {
                                    "code": "CSC 130",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                },
                                {
                                    "code": "CSC 140",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                },
                            ],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "MTH 210",
                        "credits": "4",
                        "prerequisites": {
                            "req": null,
                            "options": [
                                {
                                    "courses": [
                                        "Math SAT of at least 650",
                                        "Math ACT score of at least 28",
                                        {
                                            "code": "MTH 105",
                                            "allow_concurrent": false,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "MTH 106",
                                            "allow_concurrent": false,
                                            "minimum_grade": "C"
                                        }
                                    ],
                                    "Select": 1
                                }

                            ]
                        },

                        "corequisites": null
                    },
                    {
                        "code": "MTH 211",
                        "credits": "4",
                        "prerequisites": {
                            "req": [{
                                "code": "MTH 210",
                                "allow_concurrent": false,
                                "minimum_grade": "C"
                            }],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "PHY 200",
                        "credits": "4",
                        "prerequisites": {
                            "req": [{
                                "code": "MTH 210",
                                "allow_concurrent": true,
                                "minimum_grade": ""
                            }],
                            "options": null
                        },
                        "corequisites": [
                            {
                                "code": "PHY 200L"
                            }
                        ]
                    },
                    {
                        "code": "PHY 201",
                        "credits": "4",
                        "prerequisites": {
                            "req": [
                                {
                                    "code": "PHY 200",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                },
                                {
                                    "code": "MTH 211",
                                    "allow_concurrent": true,
                                    "minimum_grade": ""
                                },
                            ],
                            "options": null
                        },
                        "corequisites": [
                            {
                                "code": "PHY 201L"
                            }
                        ]
                    },
                    {
                        "code": "CSC 360",
                        "credits": 3,
                        "prerequisites": null,
                        "corequisites": null
                    },
                    {
                        "code": "CSC 400",
                        "credits": 3,
                        "prerequisites": {
                            "req": [
                                {
                                    "code": "MTH 240",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                },
                                {
                                    "code": "CSC 360",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                },
                            ],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 410",
                        "credits": 3,
                        "prerequisites": {
                            "req": [
                                {
                                    "code": "CSC 360",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                }],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 470",
                        "credits": 3,
                        "prerequisites": {
                            "req": [
                                {
                                    "code": "CSC 360",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                }],
                            "options": null
                        },
                        "corequisites": null
                    }
                ],
            "options":
                [
                    {
                        "courses": [
                            {
                                "code": "CSC 240",
                                "credits": "3",
                                "prerequisites": {
                                    "req": [{
                                        "code": "CSC 130",
                                        "allow_concurrent": false,
                                        "minimum_grade": ""
                                    }],
                                    "options": null
                                },
                                "corequisites": null
                            },
                            {
                                "code": "CYB 200",
                                "credits": "3",
                                "prerequisites": {
                                    "req": [{
                                        "code": "CYB 130",
                                        "allow_concurrent": false,
                                        "minimum_grade": ""
                                    }],
                                    "options": null
                                },
                                "corequisites": null
                            },
                        ],
                        "Select": 2
                    },
                    {
                        "courses": [
                            {
                                "code": "CIS 270",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [{
                                        "code": "CIS 185",
                                        "allow_concurrent": false,
                                        "minimum_grade": ""
                                    }],
                                    "options": null
                                },
                                "corequisites": null
                            },
                            {
                                "code": "CSC 310",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [
                                        {
                                            "code": "CSC 130",
                                            "allow_concurrent": false,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "CSC 140",
                                            "allow_concurrent": false,
                                            "minimum_grade": ""
                                        },
                                    ],
                                    "options": null
                                },
                                "corequisites": null
                            },
                            {
                                "code": "CSC 320",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [
                                        {
                                            "code": "CSC 130",
                                            "allow_concurrent": false,
                                            "minimum_grade": ""
                                        }
                                    ],
                                    "options": null
                                },
                                "corequisites": null
                            },
                            {
                                "code": "CIS 330",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [{
                                        "code": "CIS 185",
                                        "allow_concurrent": false,
                                        "minimum_grade": ""
                                    }],
                                    "options": null
                                },
                                "corequisites": null
                            },
                            {
                                "code": "CSC 380",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [
                                        {
                                            "code": "CSC 220",
                                            "allow_concurrent": false,
                                            "minimum_grade": ""
                                        }
                                    ],
                                    "options": [
                                        {
                                            "courses": [
                                                {
                                                    "code": "CSC 240",
                                                    "allow_concurrent": false,
                                                    "minimum_grade": ""
                                                },
                                                {
                                                    "code": "CYB 200",
                                                    "allow_concurrent": false,
                                                    "minimum_grade": ""
                                                }
                                            ],
                                            "Select": 1
                                        },
                                    ]
                                },

                                "corequisites": null
                            },
                            {
                                "code": "CSC 490",
                                "credits": 3,
                                "prerequisites": null,
                                "corequisites": null
                            },
                            {
                                "code": "CSC 491",
                                "credits": 3,
                                "prerequisites": {
                                    "req": ["2.5 GPA and Permission of Instructor"],
                                    "options": null
                                },
                                "corequisites": null
                            }
                        ],
                        "Select": 2
                    }
                ]
        },
        {
            "Major": "Computer Science Software Engineering Track",
            "College": "CLAS",
            "reqcourses":
                [
                    {
                        "code": "CSC 110",
                        "credits": "3",
                        "prerequisites": {
                            "req": null,
                            "options": [
                                {
                                    "courses": [
                                        {
                                            "code": "MTH 105",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "MTH 210",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        }
                                    ],
                                    "Select": 1
                                }

                            ]
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 120",
                        "credits": "3",
                        "prerequisites": {
                            "req": [{
                                "code": "CSC 110",
                                "allow_concurrent": false,
                                "minimum_grade": ""
                            }],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 130",
                        "credits": "3",
                        "prerequisites": {
                            "req": [{
                                "code": "CSC 120",
                                "allow_concurrent": false,
                                "minimum_grade": ""
                            }],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 140",
                        "credits": "3",
                        "prerequisites": {
                            "req": null,
                            "options": [
                                {
                                    "courses": [
                                        {
                                            "code": "MTH 105",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "MTH 210",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        }
                                    ],
                                    "Select": 1
                                }

                            ]
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 150",
                        "credits": "3",
                        "prerequisites": {
                            "req": null,
                            "options": [
                                {
                                    "courses": [
                                        {
                                            "code": "CMP 120",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "CMP 125",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "BHP 100",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "BHP 150",
                                            "allow_concurrent": true,
                                            "minimum_grade": ""
                                        }
                                    ],
                                    "Select": 1
                                }

                            ]
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 200",
                        "credits": "3",
                        "prerequisites": {
                            "req": [{
                                "code": "CSC 120",
                                "allow_concurrent": false,
                                "minimum_grade": ""
                            }],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 220",
                        "credits": "3",
                        "prerequisites": {
                            "req": [
                                {
                                    "code": "CSC 130",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                },
                                {
                                    "code": "CSC 140",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                },
                            ],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 230",
                        "credits": "3",
                        "prerequisites": {
                            "req": [{
                                "code": "MTH 211",
                                "allow_concurrent": true,
                                "minimum_grade": ""
                            }],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 350",
                        "credits": "3",
                        "prerequisites": {
                            "req": [
                                {
                                    "code": "CSC 130",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                },
                                {
                                    "code": "CSC 140",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                },
                            ],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "MTH 210",
                        "credits": "4",
                        "prerequisites": {
                            "req": null,
                            "options": [
                                {
                                    "courses": [
                                        "Math SAT of at least 650",
                                        "Math ACT score of at least 28",
                                        {
                                            "code": "MTH 105",
                                            "allow_concurrent": false,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "MTH 106",
                                            "allow_concurrent": false,
                                            "minimum_grade": "C"
                                        }
                                    ],
                                    "Select": 1
                                }

                            ]
                        },

                        "corequisites": null
                    },
                    {
                        "code": "MTH 211",
                        "credits": "4",
                        "prerequisites": {
                            "req": [{
                                "code": "MTH 210",
                                "allow_concurrent": false,
                                "minimum_grade": "C"
                            }],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "PHY 200",
                        "credits": "4",
                        "prerequisites": {
                            "req": [{
                                "code": "MTH 210",
                                "allow_concurrent": true,
                                "minimum_grade": ""
                            }],
                            "options": null
                        },
                        "corequisites": [
                            {
                                "code": "PHY 200L"
                            }
                        ]
                    },
                    {
                        "code": "PHY 201",
                        "credits": "4",
                        "prerequisites": {
                            "req": [
                                {
                                    "code": "PHY 200",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                },
                                {
                                    "code": "MTH 211",
                                    "allow_concurrent": true,
                                    "minimum_grade": ""
                                },
                            ],
                            "options": null
                        },
                        "corequisites": [
                            {
                                "code": "PHY 201L"
                            }
                        ]
                    },
                    {
                        "code": "CSC 301",
                        "credits": 3,
                        "prerequisites": null,
                        "corequisites": null
                    },
                    {
                        "code": "CSC 390",
                        "credits": 3,
                        "prerequisites": {
                            "req": [{
                                "code": "CSC 200",
                                "allow_concurrent": false,
                                "minimum_grade": ""
                            }],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 420",
                        "credits": 3,
                        "prerequisites": {
                            "req": [
                                {
                                    "code": "CSC 200",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                }],
                            "options": null
                        },
                        "corequisites": null
                    },
                    {
                        "code": "CSC 430",
                        "credits": 3,
                        "prerequisites": {
                            "req": [
                                {
                                    "code": "CSC 420",
                                    "allow_concurrent": false,
                                    "minimum_grade": ""
                                }],
                            "options": null
                        },
                        "corequisites": null
                    },
                ],
            "options":
                [
                    {
                        "courses": [
                            {
                                "code": "CSC 240",
                                "credits": "3",
                                "prerequisites": {
                                    "req": [{
                                        "code": "CSC 130",
                                        "allow_concurrent": false,
                                        "minimum_grade": ""
                                    }],
                                    "options": null
                                },
                                "corequisites": null
                            },
                            {
                                "code": "CYB 200",
                                "credits": "3",
                                "prerequisites": {
                                    "req": [{
                                        "code": "CYB 130",
                                        "allow_concurrent": false,
                                        "minimum_grade": ""
                                    }],
                                    "options": null
                                },
                                "corequisites": null
                            },
                        ],
                        "Select": 2
                    },
                    {
                        "courses": [
                            {
                                "code": "CIS 270",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [{
                                        "code": "CIS 185",
                                        "allow_concurrent": false,
                                        "minimum_grade": ""
                                    }],
                                    "options": null
                                },
                                "corequisites": null
                            },
                            {
                                "code": "CSC 310",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [
                                        {
                                            "code": "CSC 130",
                                            "allow_concurrent": false,
                                            "minimum_grade": ""
                                        },
                                        {
                                            "code": "CSC 140",
                                            "allow_concurrent": false,
                                            "minimum_grade": ""
                                        },
                                    ],
                                    "options": null
                                },
                                "corequisites": null
                            },
                            {
                                "code": "CSC 320",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [
                                        {
                                            "code": "CSC 130",
                                            "allow_concurrent": false,
                                            "minimum_grade": ""
                                        }
                                    ],
                                    "options": null
                                },
                                "corequisites": null
                            },
                            {
                                "code": "CIS 330",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [{
                                        "code": "CIS 185",
                                        "allow_concurrent": false,
                                        "minimum_grade": ""
                                    }],
                                    "options": null
                                },
                                "corequisites": null
                            },
                            {
                                "code": "CSC 380",
                                "credits": 3,
                                "prerequisites": {
                                    "req": [
                                        {
                                            "code": "CSC 220",
                                            "allow_concurrent": false,
                                            "minimum_grade": ""
                                        }
                                    ],
                                    "options": [
                                        {
                                            "courses": [
                                                {
                                                    "code": "CSC 240",
                                                    "allow_concurrent": false,
                                                    "minimum_grade": ""
                                                },
                                                {
                                                    "code": "CYB 200",
                                                    "allow_concurrent": false,
                                                    "minimum_grade": ""
                                                }
                                            ],
                                            "Select": 1
                                        },
                                    ]
                                },

                                "corequisites": null
                            },
                            {
                                "code": "CSC 490",
                                "credits": 3,
                                "prerequisites": null,
                                "corequisites": null
                            },
                            {
                                "code": "CSC 491",
                                "credits": 3,
                                "prerequisites": {
                                    "req": ["2.5 GPA and Permission of Instructor"],
                                    "options": null
                                },
                                "corequisites": null
                            }
                        ],
                        "Select": 2
                    }
                ]
        }
    ],
    "Colleges": [
        {
            "College": "CLAS",
            "reqcourses": [
                {
                    "code": "COM 104",
                    "credits": "3",
                    "prerequisites": null,
                    "corequisites": null
                },
                {
                    "code": "HIS 150",
                    "credits": "3",
                    "prerequisites": null,
                    "corequisites": null
                },
                {
                    "code": "HIS 151",
                    "credits": "3",
                    "prerequisites": [
                        {
                            "code": "HIS 150",
                            "allow_concurrent": false,
                            "minimum_grade": ""
                        }
                    ],
                    "corequisites": null
                }
            ],
            "options": [
                {
                    "courses": [
                        {
                            "code": "CMP 120",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "BHP 100",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                    ],
                    "Select": 1
                },
                {
                    "courses": [
                        {
                            "code": "CMP 125",
                            "credits": "3",
                            "prerequisites": {
                                "req": null,
                                "options": [
                                    {
                                        "courses": [
                                            {
                                                "code": "CMP 120",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            },
                                            {
                                                "code": "BHP 100",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            },
                                        ],
                                        "Select": 1
                                    }
                                ]
                            },
                            "corequisites": null
                        },
                        {
                            "code": "BHP 150",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "CMP 203",
                            "credits": "3",
                            "prerequisites": {
                                "req": [
                                    {
                                    "code": "CMP 120",
                                        "allow_concurrent": false,
                                        "minimum_grade": "B"
                                }],
                                "options": null
                            },
                            "corequisites": null
                        },
                    ],
                    "Select": 1
                },
                /* math
                {
                    "courses": [
                        {
                            "code": "MTH 102",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "MTH 105",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "MTH 106",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "MTH 210",
                            "credits": "4",
                            "prerequisites": {
                                "req": null,
                                "options": [
                                    {
                                        "courses": [
                                            "Math SAT of at least 650",
                                            "Math ACT score of at least 28",
                                            {
                                                "code": "MTH 105",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            },
                                            {
                                                "code": "MTH 106",
                                                "allow_concurrent": false,
                                                "minimum_grade": "C"
                                            }
                                        ],
                                        "Select": 1
                                    }

                                ]
                            },

                            "corequisites": null
                        },
                        {
                            "code": "MTH 211",
                            "credits": "4",
                            "prerequisites": {
                                "req": [{
                                    "code": "MTH 210",
                                    "allow_concurrent": false,
                                    "minimum_grade": "C"
                                }],
                                "options": null
                            },
                            "corequisites": null
                        }
                    ],
                    "Select": 1
                },
                */
                {
                    "courses": [
                        {
                            "code": "CHI 101",
                            "credits": "3",
                            "prerequisites": {
                                "req": null,
                                "options": [
                                    {
                                        "courses": [
                                            "Placement test",
                                            {
                                                "code": "CHI 100",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            },
                                        ],
                                        "Select": 1
                                    }
                                ]
                            },
                            "corequisites": null
                        },
                        {
                            "code": "FRE 101",
                            "credits": "3",
                            "prerequisites": {
                                "req": null,
                                "options": [
                                    {
                                        "courses": [
                                            "Placement test",
                                            {
                                                "code": "FRE 100",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            },
                                        ],
                                        "Select": 1
                                    }
                                ]
                            },
                            "corequisites": null
                        },
                        {
                            "code": "GER 101",
                            "credits": "3",
                            "prerequisites": {
                                "req": null,
                                "options": [
                                    {
                                        "courses": [
                                            "Placement test",
                                            {
                                                "code": "GER 100",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            },
                                        ],
                                        "Select": 1
                                    }
                                ]
                            },
                            "corequisites": null
                        },
                        {
                            "code": "ITA 101",
                            "credits": "3",
                            "prerequisites": {
                                "req": null,
                                "options": [
                                    {
                                        "courses": [
                                            "Placement test",
                                            {
                                                "code": "ITA 100",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            },
                                        ],
                                        "Select": 1
                                    }
                                ]
                            },
                            "corequisites": null
                        },
                        {
                            "code": "SPA 101",
                            "credits": "3",
                            "prerequisites": {
                                "req": null,
                                "options": [
                                    {
                                        "courses": [
                                            "Placement test",
                                            {
                                                "code": "SPA 100",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            },
                                        ],
                                        "Select": 1
                                    }
                                ]
                            },
                            "corequisites": null
                        },
                    ],
                    "Select": 1,
                    "Name": "Language"

                },
                /*SCIENCE*/
                {
                    "courses": [
                        {
                            "code": "COM 105",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "FTV 202",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "GSS 100",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "GSS 110",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "MCS 210",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "POL 100",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "POL 102",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "PSY 102",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "PSY 110",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "PSY 117",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "PSY 118",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "SOC 101",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "SOC 280",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "BHP 205",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "BHP 206",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "BHP 212",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "BHP 259",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "BHP 261",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "BHP 281",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "BHP 315",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "BHP 340",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "BHP 360",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "BHP 203",
                            "credits": "3",
                            "prerequisites": {
                                "req": null,
                                "options": [
                                    {
                                        "courses": [
                                            {
                                                "code": "CMP 120",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            },
                                            {
                                                "code": "BHP 100",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            },
                                        ],
                                        "Select": 1
                                    }
                                ]
                            },
                            "corequisites": null
                        },
                        {
                            "code": "BHP 252",
                            "credits": "3",
                            "prerequisites": {
                                "req": null,
                                "options": [
                                    {
                                        "courses": [
                                            {
                                                "code": "CMP 120",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            },
                                            {
                                                "code": "BHP 100",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            },
                                        ],
                                        "Select": 1
                                    }
                                ]
                            },
                            "corequisites": null
                        },
                        {
                            "code": "BHP 253",
                            "credits": "3",
                            "prerequisites": {
                                "req": null,
                                "options": [
                                    {
                                        "courses": [
                                            {
                                                "code": "CMP 120",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            },
                                            {
                                                "code": "BHP 100",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            },
                                        ],
                                        "Select": 1
                                    }
                                ]
                            },
                            "corequisites": null
                        },
                        {
                            "code": "BHP 301",
                            "credits": "3",
                            "prerequisites": {
                                "req": null,
                                "options": [
                                    {
                                        "courses": [
                                            {
                                                "code": "CMP 120",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            },
                                            {
                                                "code": "BHP 100",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            },
                                        ],
                                        "Select": 1
                                    }
                                ]
                            },
                            "corequisites": null
                        },
                        {
                            "code": "BHP 302",
                            "credits": "3",
                            "prerequisites": {
                                "req": null,
                                "options": [
                                    {
                                        "courses": [
                                            {
                                                "code": "CMP 120",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            },
                                            {
                                                "code": "BHP 100",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            },
                                        ],
                                        "Select": 1
                                    }
                                ]
                            },
                            "corequisites": null
                        },
                    ],
                    "Select": 2,
                    "Name": "Social Perspectives"
                },
                {
                    "courses": [
                        {
                            "code": "ART 104",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "ART 106",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "BHP 290",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "BHP 307",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "BHP 333",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "DAN 105",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "MUS 105",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "MUS 106",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "MUS 120",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "MUS 205",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "MUS 206",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "THE 105",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "THE 106",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "THE 120",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "THE 206",
                            "credits": "3",
                            "prerequisites": null,
                            "corequisites": null
                        },
                        {
                            "code": "AMS 307",
                            "credits": "3",
                            "prerequisites": {
                                "req": null,
                                "options": [
                                    {
                                        "courses": [
                                            {
                                                "code": "CMP 125",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            },
                                            {
                                                "code": "BHP 150",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            },
                                            {
                                                "code": "CMP 203",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            }
                                        ],
                                        "Select": 1
                                    }
                                ]
                            },
                            "corequisites": null
                        },
                        {
                            "code": "AMS 309",
                            "credits": "3",
                            "prerequisites": {
                                "req": null,
                                "options": [
                                    {
                                        "courses": [
                                            {
                                                "code": "CMP 125",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            },
                                            {
                                                "code": "BHP 150",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            },
                                            {
                                                "code": "CMP 203",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            }
                                        ],
                                        "Select": 1
                                    }
                                ]
                            },
                            "corequisites": null
                        },
                        {
                            "code": "AMS 310",
                            "credits": "3",
                            "prerequisites": {
                                "req": null,
                                "options": [
                                    {
                                        "courses": [
                                            {
                                                "code": "CMP 125",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            },
                                            {
                                                "code": "BHP 150",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            },
                                            {
                                                "code": "CMP 203",
                                                "allow_concurrent": false,
                                                "minimum_grade": ""
                                            }
                                        ],
                                        "Select": 1
                                    }
                                ]
                            },
                            "corequisites": null
                        },
                    ],
                    "Select": 1,
                    "Name": "Fine Arts Perspective"
                },
                /*Lit, Phil, Global,  */
            ]
        }
    ]
};

