exports.WelcomeParams = function (sender_id, screen_name, media_id) {
    return {
        "event": {
            "type": "message_create",
            "message_create": {
                "target": {
                    "recipient_id": sender_id
                }, "message_data": {
                    "text": "Hi," + screen_name + "\n\nWelcome to our Textile Company!!!\n\nPlease Select the Category",
                    "quick_reply": {
                        "type": "options",
                        "options": [
                            {
                                "label": "Mens",
                                "description": "Mens Apparel",
                                "metadata": "Mens"
                            },
                            {
                                "label": "Womens",
                                "description": "Womens Apparel",
                                "metadata": "Womens"
                            },
                            {
                                "label": "Childrens",
                                "description": "Childrens",
                                "metadata": "Childrens"
                            }
                        ]
                    },
                    "attachment": {
                        "type": "media",
                        "media": {
                            "id": media_id
                        }
                    }
                }
            }
        }
    }
}
exports.SizeParams = function (sender_id, text) {
    return {
        "event": {
            "type": "message_create",
            "message_create": {
                "target": {
                    "recipient_id": sender_id
                }, "message_data": {
                    "text": "You have Choosed " + text + " Color\n\nPlease Select your Size???",
                    "quick_reply": {
                        "type": "options",
                        "options": [
                            {
                                "label": "S",
                                "description": "S",
                                "metadata": "S"
                            },
                            {
                                "label": "M",
                                "description": "M",
                                "metadata": "M"
                            },
                            {
                                "label": "L",
                                "description": "L",
                                "metadata": "L"
                            },
                            {
                                "label": "XL",
                                "description": "XL",
                                "metadata": "XL"
                            },
                            {
                                "label": "2XL",
                                "description": "2XL",
                                "metadata": "2XL"
                            },
                            {
                                "label": "3XL",
                                "description": "3XL",
                                "metadata": "3XL"
                            },
                            {
                                "label": "4XL",
                                "description": "4XL",
                                "metadata": "4XL"
                            },
                            {
                                "label": "5XL",
                                "description": "5XL",
                                "metadata": "5XL"
                            },
                            {
                                "label": "6XL",
                                "description": "6XL",
                                "metadata": "6XL"
                            }
                        ]

                    }
                }
            }
        }
    }
}
exports.SizeParams1 = function (sender_id, text) {
    return {
        "event": {
            "type": "message_create",
            "message_create": {
                "target": {
                    "recipient_id": sender_id
                }, "message_data": {
                    "text": "You have Choosed " + text + " Collections\n\nPlease Select your Size???",
                    "quick_reply": {
                        "type": "options",
                        "options": [
                            {
                                "label": "S",
                                "description": "S",
                                "metadata": "S"
                            },
                            {
                                "label": "M",
                                "description": "M",
                                "metadata": "M"
                            },
                            {
                                "label": "L",
                                "description": "L",
                                "metadata": "L"
                            },
                            {
                                "label": "XL",
                                "description": "XL",
                                "metadata": "XL"
                            },
                            {
                                "label": "2XL",
                                "description": "2XL",
                                "metadata": "2XL"
                            },
                            {
                                "label": "3XL",
                                "description": "3XL",
                                "metadata": "3XL"
                            },
                            {
                                "label": "4XL",
                                "description": "4XL",
                                "metadata": "4XL"
                            },
                            {
                                "label": "5XL",
                                "description": "5XL",
                                "metadata": "5XL"
                            },
                            {
                                "label": "6XL",
                                "description": "6XL",
                                "metadata": "6XL"
                            }
                        ]

                    }
                }
            }
        }
    }
}
exports.ResultParams = function (sender_id, category, mens_types, colors, text) {
    return {
        "event": {
            "type": "message_create",
            "message_create": {
                "target": {
                    "recipient_id": sender_id
                }, "message_data": {
                    "text": "CATEGORY- " + category + " \n\n DRESS TYPE - " + mens_types + "  \n\n COLOR-" + colors + " \n\n SIZE -" + text + " \n\n THANKS FOR CHOOSING - Have Nice Day",
                }
            }
        }
    }
}
exports.ResultParams1 = function (sender_id, category, mens_types, text) {
    return {
        "event": {
            "type": "message_create",
            "message_create": {
                "target": {
                    "recipient_id": sender_id
                }, "message_data": {
                    "text": "CATEGORY- " + category + " \n\n DRESS TYPE - " + mens_types + "  \n\n  SIZE -" + text + " \n\n THANKS FOR CHOOSING - Have Nice Day",
                }
            }
        }
    }
}
exports.TshirtParams = function (sender_id, text) {
    return {
        "event": {
            "type": "message_create",
            "message_create": {
                "target": {
                    "recipient_id": sender_id
                }, "message_data": {
                    "text": "You have Choosed " + text + " Collections\n\nPlease Select Color???",
                    "quick_reply": {
                        "type": "options",
                        "options": [
                            {
                                "label": "Grey",
                                "description": "Soft Grey Cotton T-shirts",
                                "metadata": "Grey"
                            },
                            {
                                "label": "Blue",
                                "description": "Soft Blue Cotton T-shirts",
                                "metadata": "Blue"
                            },
                            {
                                "label": "Black",
                                "description": "Soft Black Cotton T-shirts",
                                "metadata": "Black"
                            }
                        ]

                    }
                }
            }
        }
    }
}
exports.WomensParams = function (sender_id, text) {
    return {
        "event": {
            "type": "message_create",
            "message_create": {
                "target": {
                    "recipient_id": sender_id
                }, "message_data": {
                    "text": "You have Selected " + text + " Category\n\nWhat dress type do you prefer???",
                    "quick_reply": {
                        "type": "options",
                        "options": [
                            {
                                "label": "Kurti",
                                "description": "Kurti Collections",
                                "metadata": "1"
                            },
                            {
                                "label": "Sari",
                                "description": "Sari Collections",
                                "metadata": "2"
                            },
                            {
                                "label": "Salwar",
                                "description": "Salwar Collections",
                                "metadata": "3"
                            },
                            {
                                "label": "Lehenga",
                                "description": "Lehenga  Collections",
                                "metadata": "4"
                            }
                        ]

                    }
                }
            }
        }
    }
}
exports.CategoryParams = function (sender_id, text) {
    return {
        "event": {
            "type": "message_create",
            "message_create": {
                "target": {
                    "recipient_id": sender_id
                }, "message_data": {
                    "text": "You have Selected " + text + " Category\n\nWhat dress type do you prefer???",
                    "quick_reply": {
                        "type": "options",
                        "options": [
                            {
                                "label": "Tshirts",
                                "description": "Classic Soft Cotton T-shirts",
                                "metadata": "Tshirts"
                            },
                            {
                                "label": "Shirts",
                                "description": "Mens Collections Formals, Office Shirts",
                                "metadata": "Shirts"
                            },
                            {
                                "label": "Jeans",
                                "description": "Jeans for Mens and Womens",
                                "metadata": "Jeans"
                            },
                            {
                                "label": "Trousers",
                                "description": "Trousers for Mens",
                                "metadata": "Trousers"
                            },
                            {
                                "label": "Shorts",
                                "description": "Shorts for Mens",
                                "metadata": "Shorts"
                            }
                        ]

                    }
                }
            }
        }
    }
}
