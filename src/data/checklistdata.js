const checklistData = {
    "ADT": {
        classA: {
            "Head lights": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHeadlights.png?alt=media&token=059c6317-bcac-4128-9c90-84e6937087f1" ,
            "Indicator/rear/brake lights": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FRear%20lights.png?alt=media&token=11bbfab6-2e31-4f46-b6be-524addc05a90" ,
            "Hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHooter.png?alt=media&token=017f6674-c65b-4f36-a6bd-c42239866d88" , 
            "Reverse hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FReverse%20hooter.png?alt=media&token=55c29d3a-0cf0-4548-81b6-f1261fa806c9" ,
            "Seat belts": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSeat%20belts.png?alt=media&token=3b624fd8-c12d-4a45-8441-a2250ef74dc0" , 
            "Seats": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSeats.png?alt=media&token=a5db2a95-881b-4839-9713-e5726f1666bc",
            "Two-way radio": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FTwo%20way%20radio.png?alt=media&token=7c661eb5-01a8-44bb-a513-1b2a2b98ba2b" , 
            "Mirrors": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FMirrors.png?alt=media&token=02ed44ff-a292-41e0-af24-5e188766919a" ,
            "Levers & joysticks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FLevers%20%26%20joysticks.png?alt=media&token=2d376604-a898-4915-9021-e78825fa7675",
            "Steer control": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSteering.png?alt=media&token=78bbb22e-8142-44f2-8aa9-7325859e6451" ,
            "Oil/fuel leaks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOil%20leak.png?alt=media&token=2d443594-f759-413a-956a-2aec978595b4",
            "Fluid level": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FFluid%20images.png?alt=media&token=75a339f6-e178-4eff-8d02-5fffaa51b739",
            "Fire extinguisher": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FFire%20extinguisher.png?alt=media&token=9c364d87-a260-4f7d-bf5b-38a6cf60857a" , 
            "Windscreen wipers": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FWindscreen%20wipers.png?alt=media&token=371a7e0a-3302-4f61-a28a-3faac4844633",
            "Windscreen condition": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FWindscreen.png?alt=media&token=4e488be5-932f-4d26-ac84-14e1b1c1dacd",
            "Brakes tested": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FBrakes.png?alt=media&token=c35871de-2292-4e3c-86d8-0599d4a32b8e" ,
            "Isolation point": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FIsolation%20point.png?alt=media&token=66d56be2-bf90-4e17-817d-fbee2f3ea201" ,
            "Tyre condition": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FTyres.png?alt=media&token=e86b0300-1409-40a5-b6a5-5f51d95819d3" ,
            "Wheel nuts": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FWheel%20nuts.png?alt=media&token=6276be15-c7bc-4795-84a9-7c80dbd6d3b0" , 
            "Air conditioner": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FAir%20conditioner.png?alt=media&token=b2c68ea5-5bb5-4b66-b44a-311617723521" , 
            "Gauges": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FGauges.png?alt=media&token=efba8ff9-7321-42d4-87d4-a3c57b234a86",
            "Steps/three-point contact": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSteps.png?alt=media&token=8091d69c-4539-4d25-be1a-bfac93eeb7af" , 
            "Strobe light": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FStrobe%20light.png?alt=media&token=800346f1-2b02-4765-8a4e-a6f98ec0755b" , 
            "Safety guards": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FEquipment%20safety%20guards.png?alt=media&token=ac8e4d00-680c-4444-a1a2-37be71096bba",
            "Stop blocks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FStop%20blocks.png?alt=media&token=23f443fa-7624-4795-8220-8edb35705b35" , 
            "Reflective tape": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FReflective%20tape.png?alt=media&token=f177c21e-c122-46f4-9a30-a079340f0675",
            "Quarterly tagged": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FQuarterly%20tagged.png?alt=media&token=57ccdb57-a537-4125-9929-f514c0820771",
            "Door seals" : "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FDoor%20seals.png?alt=media&token=45091388-acc8-4e78-81d2-e88a8465988b",
            "Operator licence": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOperator%20license.png?alt=media&token=75b2b887-8384-487b-946a-2d251e586089", 
            "Door latches": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FDoor%20latches.png?alt=media&token=8b7d8bcf-15f7-4aaf-bd31-3d61c0d86c9e"
        },
        classB: {
            "Cab clean": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FCab%20clean.png?alt=media&token=f3dfba64-d8ff-4769-81c1-0b8ac0f64487",
            "Rear/side windows": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FRear%3Aside%20windows.png?alt=media&token=54724ea8-a728-4831-9429-ee0078a30a40" , 
            "ID number": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FID%20number.png?alt=media&token=abe0388d-b63f-4e2b-b8a0-4b81d328c5fb",
            "Wiring": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FWiring.png?alt=media&token=5b91c44a-3edb-4a3d-bc43-261d98b8928b",
            "Cab/bonnet stay": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FCab%3Abonnet%20stay.png?alt=media&token=154e60c5-3642-44f7-9858-b7ed7cac4eb4"
        },
    }, 
    
    "AWT":{
        classA: {
            "Operator licence": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOperator%20license.png?alt=media&token=75b2b887-8384-487b-946a-2d251e586089", 
            "Pins in position and locked": "img" ,
            "Fire extinguisher": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FFire%20extinguisher.png?alt=media&token=9c364d87-a260-4f7d-bf5b-38a6cf60857a" , 
            "Hand rails": "img" ,
            "Doors/handles": "img" ,
            "Stop blocks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FStop%20blocks.png?alt=media&token=23f443fa-7624-4795-8220-8edb35705b35" , 
            "Wheel nuts": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FWheel%20nuts.png?alt=media&token=6276be15-c7bc-4795-84a9-7c80dbd6d3b0" , 
            "Seat belts": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSeat%20belts.png?alt=media&token=3b624fd8-c12d-4a45-8441-a2250ef74dc0" , 
            "Levers & joysticks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FLevers%20%26%20joysticks.png?alt=media&token=2d376604-a898-4915-9021-e78825fa7675",
            "Steer control": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSteering.png?alt=media&token=78bbb22e-8142-44f2-8aa9-7325859e6451" ,
            "Hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHooter.png?alt=media&token=017f6674-c65b-4f36-a6bd-c42239866d88" , 
            "Reverse hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FReverse%20hooter.png?alt=media&token=55c29d3a-0cf0-4548-81b6-f1261fa806c9" ,
            "Head lights": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHeadlights.png?alt=media&token=059c6317-bcac-4128-9c90-84e6937087f1" ,
            "Strobe light": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FStrobe%20light.png?alt=media&token=800346f1-2b02-4765-8a4e-a6f98ec0755b" , 
            "Indicator/rear/brake lights": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FRear%20lights.png?alt=media&token=11bbfab6-2e31-4f46-b6be-524addc05a90" ,
            "Brake test service brake": "img" ,
            "Brake test park brake": "img" ,
            "Air conditioner": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FAir%20conditioner.png?alt=media&token=b2c68ea5-5bb5-4b66-b44a-311617723521" , 
            "Oil level": "img" ,
        },
        classB: {
            "Dashboard instruments": "img" ,
            "Oil/fuel leaks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOil%20leak.png?alt=media&token=2d443594-f759-413a-956a-2aec978595b4",
            "Windows": "img" ,
            "Tyre condition": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FTyres.png?alt=media&token=e86b0300-1409-40a5-b6a5-5f51d95819d3" ,
            "Steps": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSteps.png?alt=media&token=8091d69c-4539-4d25-be1a-bfac93eeb7af" , 
            "Seats": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSeats.png?alt=media&token=a5db2a95-881b-4839-9713-e5726f1666bc",
            "Screen wiper": "img" ,
            "Mirrors": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FMirrors.png?alt=media&token=02ed44ff-a292-41e0-af24-5e188766919a" ,
            "Coolant level": "img" ,
            "Radiator not clogged": "img" ,
            "Hydraulic oil level": "img" ,
            "Fuel level": "img" ,
            "Fuel level" : "img" ,
        },
        classC: {
            "New bump marks": "img" 
        },
        
        "Red permit area": {
            classA: {
                "Brake test ramp when entering pit": "img" ,
                "Flag": "img" ,
                "Radio two way": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FTwo%20way%20radio.png?alt=media&token=7c661eb5-01a8-44bb-a513-1b2a2b98ba2b" , 
            },
            classB: {
                "Reflective tape condition": "img",
            }
        }
    },

    "DB": {
        classA: {
            "Operator licence": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOperator%20license.png?alt=media&token=75b2b887-8384-487b-946a-2d251e586089", 
            "Wheel nuts": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FWheel%20nuts.png?alt=media&token=6276be15-c7bc-4795-84a9-7c80dbd6d3b0" , 
            "Pins in position and locked": "img" ,
            "Fire extinguisher": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FFire%20extinguisher.png?alt=media&token=9c364d87-a260-4f7d-bf5b-38a6cf60857a" , 
            "Stop blocks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FStop%20blocks.png?alt=media&token=23f443fa-7624-4795-8220-8edb35705b35" , 
            "Emergency triangle excluding red permit area": "img" , 
            "Seat belts": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSeat%20belts.png?alt=media&token=3b624fd8-c12d-4a45-8441-a2250ef74dc0" , 
            "Levers & joysticks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FLevers%20%26%20joysticks.png?alt=media&token=2d376604-a898-4915-9021-e78825fa7675",
            "Steer control": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSteering.png?alt=media&token=78bbb22e-8142-44f2-8aa9-7325859e6451" ,
            "Hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHooter.png?alt=media&token=017f6674-c65b-4f36-a6bd-c42239866d88" , 
            "Reverse hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FReverse%20hooter.png?alt=media&token=55c29d3a-0cf0-4548-81b6-f1261fa806c9" ,
            "Head lights": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHeadlights.png?alt=media&token=059c6317-bcac-4128-9c90-84e6937087f1" ,
            "Strobe light": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FStrobe%20light.png?alt=media&token=800346f1-2b02-4765-8a4e-a6f98ec0755b" , 
            "Indicator/rear/brake lights": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FRear%20lights.png?alt=media&token=11bbfab6-2e31-4f46-b6be-524addc05a90" ,
            "Brake lights": "img" ,
            "Brake test service brake": "img" ,
            "Ppe": "img" ,
            "Isolation point": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FIsolation%20point.png?alt=media&token=66d56be2-bf90-4e17-817d-fbee2f3ea201" ,
            "Brake test park brake": "img" ,
            "Doors/handles": "img" ,
            "Air conditioner": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FAir%20conditioner.png?alt=media&token=b2c68ea5-5bb5-4b66-b44a-311617723521" , 
            "Radio two way": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FTwo%20way%20radio.png?alt=media&token=7c661eb5-01a8-44bb-a513-1b2a2b98ba2b" , 
        },
        classB: {
            "Oil/fuel leaks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOil%20leak.png?alt=media&token=2d443594-f759-413a-956a-2aec978595b4",
            "Mirrors": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FMirrors.png?alt=media&token=02ed44ff-a292-41e0-af24-5e188766919a" ,
            "Windows": "img" ,
            "Tyre condition": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FTyres.png?alt=media&token=e86b0300-1409-40a5-b6a5-5f51d95819d3" ,
            "Seats": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSeats.png?alt=media&token=a5db2a95-881b-4839-9713-e5726f1666bc",
            "Steps": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSteps.png?alt=media&token=8091d69c-4539-4d25-be1a-bfac93eeb7af" , 
            "Screen wipers": "img" ,
            "Oil level": "img" ,
            "Dashboard indicators/instruments": "img" ,
            "Hydraulic oil": "img" , 
            "Coolant level": "img" ,
            "Radiator not clogged": "img" ,
            "Pto": "img"
        },
        classC: {
            "New bump marks": "img" 
        },

        "Other attachments": {
            classA: {
                "Pumps": "img" ,
                "Safety guards": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FEquipment%20safety%20guards.png?alt=media&token=ac8e4d00-680c-4444-a1a2-37be71096bba",
                "Hose connectors": "img" ,
                "Hose fittings": "img" ,
                "Brake test ramp when entering pit": "img" ,
                "Radio two way": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FTwo%20way%20radio.png?alt=media&token=7c661eb5-01a8-44bb-a513-1b2a2b98ba2b" , 
                "Flags": "img" ,
            }
        }
    },
    
    "Drills": {
        classA: {
            "Operator licence": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOperator%20license.png?alt=media&token=75b2b887-8384-487b-946a-2d251e586089", 
            "Fire extinguisher": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FFire%20extinguisher.png?alt=media&token=9c364d87-a260-4f7d-bf5b-38a6cf60857a" , 
            "Front and rear lights": "img" ,
            "Strobe light": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FStrobe%20light.png?alt=media&token=800346f1-2b02-4765-8a4e-a6f98ec0755b" , 
            "Tram hooter": "img" ,
            "Radio two way": "img" ,
            "Dashboard warning lights" : "img" ,
            "Hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHooter.png?alt=media&token=017f6674-c65b-4f36-a6bd-c42239866d88" , 
            "Drifter slides": "img" ,
            "Drifter cable": "img" ,
            "Seat belts": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSeat%20belts.png?alt=media&token=3b624fd8-c12d-4a45-8441-a2250ef74dc0" , 
            "Key control": "img" ,
            "Controls": "img" ,
            "Emergency stop condition": "img" ,
            "Boom condition": "img" , 
            "Isolation point": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FIsolation%20point.png?alt=media&token=66d56be2-bf90-4e17-817d-fbee2f3ea201" ,
            "Hose connectors": "img" ,
            "Hoses": "img" , 
            "Isolator vavles": "img" ,
            "Safety guards": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FEquipment%20safety%20guards.png?alt=media&token=ac8e4d00-680c-4444-a1a2-37be71096bba",
            "Air conditioner": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FAir%20conditioner.png?alt=media&token=b2c68ea5-5bb5-4b66-b44a-311617723521" , 
            "Doors and handles": "img" ,
            "Dust collection": "img" ,
        },
        classB: {
            "Mirrors": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FMirrors.png?alt=media&token=02ed44ff-a292-41e0-af24-5e188766919a" ,
            "Oil/fuel leaks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOil%20leak.png?alt=media&token=2d443594-f759-413a-956a-2aec978595b4",
            "Seat": "img" ,
            "Steps": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSteps.png?alt=media&token=8091d69c-4539-4d25-be1a-bfac93eeb7af" , 
            "Reflective tape condition": "img" ,
            "Tracks and sprockets": "img" ,
            "Windows and wipers": "img" ,
            "Cylinders": "img" , 
            "Tow bar and pin": "img" ,
            "Carousel": "img" 
        },
        classC: {
        "New bump marks": "img",
        "Fuel level": "img"
        }
    }, 

    "Excavator": {
        classA: {
            "Operator licence": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOperator%20license.png?alt=media&token=75b2b887-8384-487b-946a-2d251e586089", 
            "Fire extinguisher": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FFire%20extinguisher.png?alt=media&token=9c364d87-a260-4f7d-bf5b-38a6cf60857a" , 
            "Seat belts": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSeat%20belts.png?alt=media&token=3b624fd8-c12d-4a45-8441-a2250ef74dc0" , 
            "Head lights": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHeadlights.png?alt=media&token=059c6317-bcac-4128-9c90-84e6937087f1" ,
            "Strobe light": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FStrobe%20light.png?alt=media&token=800346f1-2b02-4765-8a4e-a6f98ec0755b" , 
            "Area lights": "img" ,
            "Dashboard warning lights": "img" ,
            "Hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHooter.png?alt=media&token=017f6674-c65b-4f36-a6bd-c42239866d88" , 
            "Travel alarm": "img" ,
            "Swing brakes": "img" ,
            "Control": "img" , 
            "All pipes": "img" , 
            "Mirrors": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FMirrors.png?alt=media&token=02ed44ff-a292-41e0-af24-5e188766919a" ,
            "Radio two way": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FTwo%20way%20radio.png?alt=media&token=7c661eb5-01a8-44bb-a513-1b2a2b98ba2b" , 
            "Isolation point": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FIsolation%20point.png?alt=media&token=66d56be2-bf90-4e17-817d-fbee2f3ea201" ,
            "Key control": "img" , 
            "Emergency stop condition": "img" ,
            "Air conditioner": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FAir%20conditioner.png?alt=media&token=b2c68ea5-5bb5-4b66-b44a-311617723521" , 
            "Doors and handles": "img"  
        },
        classB: {
            "Steps": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSteps.png?alt=media&token=8091d69c-4539-4d25-be1a-bfac93eeb7af" , 
            "Hand grips": "img" ,
            "Windows": "img" ,
            "Seats": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSeats.png?alt=media&token=a5db2a95-881b-4839-9713-e5726f1666bc",
            "Oil/fuel leaks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOil%20leak.png?alt=media&token=2d443594-f759-413a-956a-2aec978595b4",
            "Tracks": "img" ,
            "Reflective tape condition": "img" ,
            "Bucket": "img" ,
            "Rollers": "img"
        }, 
        classC: {
            "New bump marks": "img" 
        },
    },

    "FEL": {
        classA: {
            "Operator licence": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOperator%20license.png?alt=media&token=75b2b887-8384-487b-946a-2d251e586089", 
            "Stop blocks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FStop%20blocks.png?alt=media&token=23f443fa-7624-4795-8220-8edb35705b35" , 
            "Fire extinguisher": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FFire%20extinguisher.png?alt=media&token=9c364d87-a260-4f7d-bf5b-38a6cf60857a" , 
            "Seat belts": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSeat%20belts.png?alt=media&token=3b624fd8-c12d-4a45-8441-a2250ef74dc0" , 
            "Head lights": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHeadlights.png?alt=media&token=059c6317-bcac-4128-9c90-84e6937087f1" ,
            "Access lights": "img" , 
            "Indicator/rear/brake lights": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FRear%20lights.png?alt=media&token=11bbfab6-2e31-4f46-b6be-524addc05a90" ,
            "Hazard lights": "img" ,
            "Mirrors": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FMirrors.png?alt=media&token=02ed44ff-a292-41e0-af24-5e188766919a" ,
            "Dashboard warning lights": "img" , 
            "Hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHooter.png?alt=media&token=017f6674-c65b-4f36-a6bd-c42239866d88" , 
            "Reverse hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FReverse%20hooter.png?alt=media&token=55c29d3a-0cf0-4548-81b6-f1261fa806c9" , 
            "Steer control": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSteering.png?alt=media&token=78bbb22e-8142-44f2-8aa9-7325859e6451" ,
            "Brakes tested": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FBrakes.png?alt=media&token=c35871de-2292-4e3c-86d8-0599d4a32b8e" ,
            "Key control/proxy": "img" ,
            "Gauges": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FGauges.png?alt=media&token=efba8ff9-7321-42d4-87d4-a3c57b234a86",
            "Tyre condition": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FTyres.png?alt=media&token=e86b0300-1409-40a5-b6a5-5f51d95819d3" ,
            "Controls":"img" , 
            "Brake test ramp when entering pit": "img" ,
            "Strobe light": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FStrobe%20light.png?alt=media&token=800346f1-2b02-4765-8a4e-a6f98ec0755b" , 
            "Radio two way": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FTwo%20way%20radio.png?alt=media&token=7c661eb5-01a8-44bb-a513-1b2a2b98ba2b" , 
            "Isolation point": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FIsolation%20point.png?alt=media&token=66d56be2-bf90-4e17-817d-fbee2f3ea201" ,
            "Air conditioner": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FAir%20conditioner.png?alt=media&token=b2c68ea5-5bb5-4b66-b44a-311617723521" , 
            "Doors and handles": "img" 
        },
        
        classB: {
            "Hand grips": "img" ,
            "Hand rails": "img" ,
            "Screen wipers": "img" ,
            "Fuel level": "img" ,
            "All pipes": "img" ,
            "Seats": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSeats.png?alt=media&token=a5db2a95-881b-4839-9713-e5726f1666bc",
            "Oil/fuel leaks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOil%20leak.png?alt=media&token=2d443594-f759-413a-956a-2aec978595b4",
            "Windows": "img" ,
            "Steps": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSteps.png?alt=media&token=8091d69c-4539-4d25-be1a-bfac93eeb7af" , 
            "Reflective tape condition": "img" ,
            "Bucket": "img"
        },
        
        classC: {
            "Towbar and pin": "img" ,
            "New bump marks": "img"
        }
    },
    
    "Forklift": {
        classA: {
            "Operator licence": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOperator%20license.png?alt=media&token=75b2b887-8384-487b-946a-2d251e586089", 
            "Stop blocks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FStop%20blocks.png?alt=media&token=23f443fa-7624-4795-8220-8edb35705b35" , 
            "Wheel nuts": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FWheel%20nuts.png?alt=media&token=6276be15-c7bc-4795-84a9-7c80dbd6d3b0" , 
            "Fork condition": "img",
            "Lifting chain condition": "img",
            "Pins in position & locked": "img",
            "Seat belts": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSeat%20belts.png?alt=media&token=3b624fd8-c12d-4a45-8441-a2250ef74dc0" , 
            "Emergency triangle": "img",
            "Controls": "img",
            "Hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHooter.png?alt=media&token=017f6674-c65b-4f36-a6bd-c42239866d88" , 
            "Reverse hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FReverse%20hooter.png?alt=media&token=55c29d3a-0cf0-4548-81b6-f1261fa806c9" ,
            "Head lights": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHeadlights.png?alt=media&token=059c6317-bcac-4128-9c90-84e6937087f1" ,
            "Strobe light": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FStrobe%20light.png?alt=media&token=800346f1-2b02-4765-8a4e-a6f98ec0755b" , 
            "Indicator/rear/brake lights": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FRear%20lights.png?alt=media&token=11bbfab6-2e31-4f46-b6be-524addc05a90" ,
            "Brake test (park brake)": "img",
            "Brake test (service brake)": "img",
            "Fire extinguisher": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FFire%20extinguisher.png?alt=media&token=9c364d87-a260-4f7d-bf5b-38a6cf60857a" , 
        },
        
        classB: {
            "Tyre condition": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FTyres.png?alt=media&token=e86b0300-1409-40a5-b6a5-5f51d95819d3" ,
            "Dashboard indicators": "img",
            "Mirrors": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FMirrors.png?alt=media&token=02ed44ff-a292-41e0-af24-5e188766919a" ,
            "Seats": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSeats.png?alt=media&token=a5db2a95-881b-4839-9713-e5726f1666bc",
            "Oil/fuel leaks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOil%20leak.png?alt=media&token=2d443594-f759-413a-956a-2aec978595b4",
            "Hydraulic oil": "img",
            "Oil level": "img",
            "Coolant level": "img",
            "Radiator not clogged": "img",
        },

        classC: {
            "New bump marks": "img"
        }
    },
    
    "Grader": {
        classA: {
            "Operator licence": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOperator%20license.png?alt=media&token=75b2b887-8384-487b-946a-2d251e586089", 
            "Seat belts": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSeat%20belts.png?alt=media&token=3b624fd8-c12d-4a45-8441-a2250ef74dc0" , 
            "Fire extinguisher": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FFire%20extinguisher.png?alt=media&token=9c364d87-a260-4f7d-bf5b-38a6cf60857a" , 
            "Head lights": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHeadlights.png?alt=media&token=059c6317-bcac-4128-9c90-84e6937087f1" ,
            "Strobe light": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FStrobe%20light.png?alt=media&token=800346f1-2b02-4765-8a4e-a6f98ec0755b" , 
            "Indicator/rear/brake lights": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FRear%20lights.png?alt=media&token=11bbfab6-2e31-4f46-b6be-524addc05a90" ,
            "Hazard lights": "img",
            "Mirrors": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FMirrors.png?alt=media&token=02ed44ff-a292-41e0-af24-5e188766919a" ,
            "Dashboard warning lights": "img",
            "Hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHooter.png?alt=media&token=017f6674-c65b-4f36-a6bd-c42239866d88" , 
            "Reverse hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FReverse%20hooter.png?alt=media&token=55c29d3a-0cf0-4548-81b6-f1261fa806c9" ,
            "Gauges": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FGauges.png?alt=media&token=efba8ff9-7321-42d4-87d4-a3c57b234a86",
            "Steer control": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSteering.png?alt=media&token=78bbb22e-8142-44f2-8aa9-7325859e6451" ,
            "Brakes tested": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FBrakes.png?alt=media&token=c35871de-2292-4e3c-86d8-0599d4a32b8e" ,
            "Controls": "img",
            "Isolation point": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FIsolation%20point.png?alt=media&token=66d56be2-bf90-4e17-817d-fbee2f3ea201" ,
            "Key control": "img",
            "Radio two way": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FTwo%20way%20radio.png?alt=media&token=7c661eb5-01a8-44bb-a513-1b2a2b98ba2b" , 
            "Air conditioner": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FAir%20conditioner.png?alt=media&token=b2c68ea5-5bb5-4b66-b44a-311617723521" , 
            "Doors & handles": "img",    
        },
        
        classB: {
            "Tyre condition": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FTyres.png?alt=media&token=e86b0300-1409-40a5-b6a5-5f51d95819d3" ,
            "Hand grips": "img",
            "Screen wiper": "img",
            "Fuel level": "img",
            "All pipes": "img",
            "Oil/fuel leaks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOil%20leak.png?alt=media&token=2d443594-f759-413a-956a-2aec978595b4",
            "Windows": "img",
            "Seats": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSeats.png?alt=media&token=a5db2a95-881b-4839-9713-e5726f1666bc",
            "Steps": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSteps.png?alt=media&token=8091d69c-4539-4d25-be1a-bfac93eeb7af" , 
            "Reflective tape condition": "img",
            "Blade & ripper": "img"  
        },

        classC: {
            "Hour meter": "img",
            "New bump marks": "img"
        }
    },
    
    "LDV": {
        classA: {
            "Operator licence": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOperator%20license.png?alt=media&token=75b2b887-8384-487b-946a-2d251e586089", 
            "Wheel nuts": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FWheel%20nuts.png?alt=media&token=6276be15-c7bc-4795-84a9-7c80dbd6d3b0" , 
            "Fire extinguisher": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FFire%20extinguisher.png?alt=media&token=9c364d87-a260-4f7d-bf5b-38a6cf60857a" , 
            "Emergency triangle": "img",
            "Seat belts": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSeat%20belts.png?alt=media&token=3b624fd8-c12d-4a45-8441-a2250ef74dc0" , 
            "Hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHooter.png?alt=media&token=017f6674-c65b-4f36-a6bd-c42239866d88" , 
            "Reverse hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FReverse%20hooter.png?alt=media&token=55c29d3a-0cf0-4548-81b6-f1261fa806c9" ,
            "Head lights": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHeadlights.png?alt=media&token=059c6317-bcac-4128-9c90-84e6937087f1" ,
            "Indicator/rear/brake lights": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FRear%20lights.png?alt=media&token=11bbfab6-2e31-4f46-b6be-524addc05a90" ,
            "Reverse lights": "img",
            "Brake test (foot brake)": "img",
            "Brake test (emergency brake)": "img",
        },
        
        classB: {
            "Oil/fuel leaks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOil%20leak.png?alt=media&token=2d443594-f759-413a-956a-2aec978595b4",
            "Tyre condition": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FTyres.png?alt=media&token=e86b0300-1409-40a5-b6a5-5f51d95819d3" ,
            "Dashboard indicators": "img",
            "Windows": "img",
            "Mirrors": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FMirrors.png?alt=media&token=02ed44ff-a292-41e0-af24-5e188766919a" ,
            "Seats": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSeats.png?alt=media&token=a5db2a95-881b-4839-9713-e5726f1666bc",
            "Screen wiper": "img"
        },

        "Red permit area": {
            classA: {
                "Brake test ramp when entering pit": "img",
                "Radio two way": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FTwo%20way%20radio.png?alt=media&token=7c661eb5-01a8-44bb-a513-1b2a2b98ba2b" , 
                "Flag": "img",
                "Strobe light": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FStrobe%20light.png?alt=media&token=800346f1-2b02-4765-8a4e-a6f98ec0755b" , 
            },

            classB: {
                "Reflective tape condition": "img"
            }
        },

        "Towing a trailer": {
            classA: {
                "Wheel nuts": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FWheel%20nuts.png?alt=media&token=6276be15-c7bc-4795-84a9-7c80dbd6d3b0" , 
                "Stop blocks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FStop%20blocks.png?alt=media&token=23f443fa-7624-4795-8220-8edb35705b35" , 
                "Safety chain/pin": "img",
                "Tow bar pin": "img",
                "Indicator/rear/brake lights": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FRear%20lights.png?alt=media&token=11bbfab6-2e31-4f46-b6be-524addc05a90" ,
            },
            
            classB: {
                "Tyre condition": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FTyres.png?alt=media&token=e86b0300-1409-40a5-b6a5-5f51d95819d3" ,
                "Reflective tape condition": "img"
            }
            
        },

        "Weekly inspection": {
            classB: {
                "Oil level":  "img",
                "Coolant level": "img",
                "Fluid level": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FFluid%20images.png?alt=media&token=75a339f6-e178-4eff-8d02-5fffaa51b739",
                "Screen wiper level": "img",
                "Radiator not clogged": "img"
            }
        },     
    },
    
    "SRV Water Bowser": {
        classA: {
            "Operator licence": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOperator%20license.png?alt=media&token=75b2b887-8384-487b-946a-2d251e586089", 
            "Wheel nuts": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FWheel%20nuts.png?alt=media&token=6276be15-c7bc-4795-84a9-7c80dbd6d3b0" , 
            "Pins in position and locked": "img",
            "Fire extinguisher": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FFire%20extinguisher.png?alt=media&token=9c364d87-a260-4f7d-bf5b-38a6cf60857a" , 
            "Stop blocks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FStop%20blocks.png?alt=media&token=23f443fa-7624-4795-8220-8edb35705b35" , 
            "Emergency triangle": "img",
            "Seat belts": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSeat%20belts.png?alt=media&token=3b624fd8-c12d-4a45-8441-a2250ef74dc0" , 
            "Controls": "img",
            "Hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHooter.png?alt=media&token=017f6674-c65b-4f36-a6bd-c42239866d88" , 
            "Reverse hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FReverse%20hooter.png?alt=media&token=55c29d3a-0cf0-4548-81b6-f1261fa806c9" ,
            "Head lights": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHeadlights.png?alt=media&token=059c6317-bcac-4128-9c90-84e6937087f1" ,
            "Strobe light": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FStrobe%20light.png?alt=media&token=800346f1-2b02-4765-8a4e-a6f98ec0755b" , 
            "Indicator/rear/brake lights": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FRear%20lights.png?alt=media&token=11bbfab6-2e31-4f46-b6be-524addc05a90" ,
            "Brake test (service brake)": "img",
            "Brake test (park brake)": "img",
            "Doors & handles": "img",
            "Air conditioner": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FAir%20conditioner.png?alt=media&token=b2c68ea5-5bb5-4b66-b44a-311617723521" , 
        },
        classB: {
            "Oil level": "img",
            "Oil/fuel leaks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOil%20leak.png?alt=media&token=2d443594-f759-413a-956a-2aec978595b4",
            "Mirrors": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FMirrors.png?alt=media&token=02ed44ff-a292-41e0-af24-5e188766919a" ,
            "Windows": "img",
            "Tyre condition": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FTyres.png?alt=media&token=e86b0300-1409-40a5-b6a5-5f51d95819d3" ,
            "Seats": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSeats.png?alt=media&token=a5db2a95-881b-4839-9713-e5726f1666bc",
            "Steps": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSteps.png?alt=media&token=8091d69c-4539-4d25-be1a-bfac93eeb7af" , 
            "Screen wiper": "img",
            "Safety guards": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FEquipment%20safety%20guards.png?alt=media&token=ac8e4d00-680c-4444-a1a2-37be71096bba",
            "Dashboard indicators": "img",
            "Hydraulic oil": "img",
            "Coolant level": "img",
            "Radiator not clogged": "img",    
        },

        classC: {
            "New bump marks": "img"
        },

        "Other attachments": {
            "Pumps": "img",
            "Safety guards": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FEquipment%20safety%20guards.png?alt=media&token=ac8e4d00-680c-4444-a1a2-37be71096bba",
            "Hose connectors": "img",
            "Hoses & fittings": "img",
        },

        "Red permit area": {
            classA: {
                "Brake test ramp when entering pit": "img",
                "Radio two way": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FTwo%20way%20radio.png?alt=media&token=7c661eb5-01a8-44bb-a513-1b2a2b98ba2b" , 
                "Flag": "img"
            },
            classB: {
                "Reflective tape": "img"
            }
        }
    },
    
    "Track Dozer": {
        classA: {
            "Operator licence": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOperator%20license.png?alt=media&token=75b2b887-8384-487b-946a-2d251e586089", 
            "Seat belts": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSeat%20belts.png?alt=media&token=3b624fd8-c12d-4a45-8441-a2250ef74dc0" , 
            "Fire extinguisher": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FFire%20extinguisher.png?alt=media&token=9c364d87-a260-4f7d-bf5b-38a6cf60857a" , 
            "Head lights": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHeadlights.png?alt=media&token=059c6317-bcac-4128-9c90-84e6937087f1" ,
            "Strobe light": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FStrobe%20light.png?alt=media&token=800346f1-2b02-4765-8a4e-a6f98ec0755b" , 
            "Access light": "img",
            "Rear lights": "img",
            "Mirrors": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FMirrors.png?alt=media&token=02ed44ff-a292-41e0-af24-5e188766919a" ,
            "Dashboard warning lights": "img",
            "Hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHooter.png?alt=media&token=017f6674-c65b-4f36-a6bd-c42239866d88" , 
            "Reverse hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FReverse%20hooter.png?alt=media&token=55c29d3a-0cf0-4548-81b6-f1261fa806c9" ,
            "Steer control": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSteering.png?alt=media&token=78bbb22e-8142-44f2-8aa9-7325859e6451" ,
            "Brakes tested": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FBrakes.png?alt=media&token=c35871de-2292-4e3c-86d8-0599d4a32b8e" ,
            "Controls": "img",
            "Gauges": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FGauges.png?alt=media&token=efba8ff9-7321-42d4-87d4-a3c57b234a86",
            "Isolation point": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FIsolation%20point.png?alt=media&token=66d56be2-bf90-4e17-817d-fbee2f3ea201" ,
            "Key control": "img",
            "Air conditioner": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FAir%20conditioner.png?alt=media&token=b2c68ea5-5bb5-4b66-b44a-311617723521" , 
            "Doors & handles": "img",
            "Safety guards": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FEquipment%20safety%20guards.png?alt=media&token=ac8e4d00-680c-4444-a1a2-37be71096bba",
            "Radio two way": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FTwo%20way%20radio.png?alt=media&token=7c661eb5-01a8-44bb-a513-1b2a2b98ba2b" , 
        },
        
        classB: {
            "Screen wiper": "img",
            "Fuel level": "img",
            "All pipes": "img",
            "Seats": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSeats.png?alt=media&token=a5db2a95-881b-4839-9713-e5726f1666bc",
            "Windows": "img",
            "Steps": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSteps.png?alt=media&token=8091d69c-4539-4d25-be1a-bfac93eeb7af" , 
            "Oil/fuel leaks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOil%20leak.png?alt=media&token=2d443594-f759-413a-956a-2aec978595b4",
            "Tracks": "img",
            "Hand grips": "img",
            "Reflective tape condition": "img",
            "Blade ripper": "img"   
        },

        classC: {
            "New bump marks": "img"
        }
    },

    "RDT": {
        classA: {
            "Operator licence": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOperator%20license.png?alt=media&token=75b2b887-8384-487b-946a-2d251e586089", 
            "Stop blocks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FStop%20blocks.png?alt=media&token=23f443fa-7624-4795-8220-8edb35705b35" , 
            "Fire extinguisher": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FFire%20extinguisher.png?alt=media&token=9c364d87-a260-4f7d-bf5b-38a6cf60857a" , 
            "Seat belts": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSeat%20belts.png?alt=media&token=3b624fd8-c12d-4a45-8441-a2250ef74dc0" , 
            "Head lights": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHeadlights.png?alt=media&token=059c6317-bcac-4128-9c90-84e6937087f1" ,
            "Indicator/rear/brake lights": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FRear%20lights.png?alt=media&token=11bbfab6-2e31-4f46-b6be-524addc05a90" ,
            "Key control/proxy": "img",
            "Emergency stop condition": "img",
            "Mirrors": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FMirrors.png?alt=media&token=02ed44ff-a292-41e0-af24-5e188766919a" ,
            "Dashboard warning lights": "img",
            "Dump body up buzzer": "img",
            "Hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHooter.png?alt=media&token=017f6674-c65b-4f36-a6bd-c42239866d88" , 
            "Reverse hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FReverse%20hooter.png?alt=media&token=55c29d3a-0cf0-4548-81b6-f1261fa806c9" ,
            "Directional hooter": "img",
            "Steer control": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSteering.png?alt=media&token=78bbb22e-8142-44f2-8aa9-7325859e6451" ,
            "Brakes tested": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FBrakes.png?alt=media&token=c35871de-2292-4e3c-86d8-0599d4a32b8e" ,
            "Gauges": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FGauges.png?alt=media&token=efba8ff9-7321-42d4-87d4-a3c57b234a86",
            "Tyre condition": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FTyres.png?alt=media&token=e86b0300-1409-40a5-b6a5-5f51d95819d3" ,
            "Controls": "img",
            "Radio two way": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FTwo%20way%20radio.png?alt=media&token=7c661eb5-01a8-44bb-a513-1b2a2b98ba2b" , 
            "Air conditioner": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FAir%20conditioner.png?alt=media&token=b2c68ea5-5bb5-4b66-b44a-311617723521" , 
            "Doors & handles": "img"
        },
        
        classB: {
            "Hand rails & kick plates": "img",
            "Access light": "img",
            "Screen wiper": "img",
            "Oil/fuel leaks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOil%20leak.png?alt=media&token=2d443594-f759-413a-956a-2aec978595b4",
            "All pipes": "img",
            "Windows": "img",
            "Seats": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSeats.png?alt=media&token=a5db2a95-881b-4839-9713-e5726f1666bc",
            "Reflective tape condition": "img",
            "Steps": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSteps.png?alt=media&token=8091d69c-4539-4d25-be1a-bfac93eeb7af" , 
        },

        classC: {
            "Hour meter": "img",
            "New bump marks": "img"
        }
    },

    "Truck Mounted Crane": {
        classA: {
            "Operator licence": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOperator%20license.png?alt=media&token=75b2b887-8384-487b-946a-2d251e586089", 
            "Wheel nuts": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FWheel%20nuts.png?alt=media&token=6276be15-c7bc-4795-84a9-7c80dbd6d3b0" , 
            "Pins in position and locked": "img",
            "Fire extinguisher": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FFire%20extinguisher.png?alt=media&token=9c364d87-a260-4f7d-bf5b-38a6cf60857a" , 
            "Stop blocks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FStop%20blocks.png?alt=media&token=23f443fa-7624-4795-8220-8edb35705b35" , 
            "Emergency triangle": "img",
            "Seat belts": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSeat%20belts.png?alt=media&token=3b624fd8-c12d-4a45-8441-a2250ef74dc0" , 
            "Controls": "img",
            "Hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHooter.png?alt=media&token=017f6674-c65b-4f36-a6bd-c42239866d88" , 
            "Reverse hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FReverse%20hooter.png?alt=media&token=55c29d3a-0cf0-4548-81b6-f1261fa806c9" ,
            "Head lights": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHeadlights.png?alt=media&token=059c6317-bcac-4128-9c90-84e6937087f1" ,
            "Strobe light": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FStrobe%20light.png?alt=media&token=800346f1-2b02-4765-8a4e-a6f98ec0755b" , 
            "Indicator/rear/brake lights": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FRear%20lights.png?alt=media&token=11bbfab6-2e31-4f46-b6be-524addc05a90" ,
            "Brake lights": "img",
            "Brake test (service brake)": "img",
            "Brake test (park brake)": "img",
            "Doors & handles": "img",
            
        },
        classB: {
            "Tyre condition": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FTyres.png?alt=media&token=e86b0300-1409-40a5-b6a5-5f51d95819d3" ,
            "Dashboard indicators": "img",
            "Oil/fuel leaks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOil%20leak.png?alt=media&token=2d443594-f759-413a-956a-2aec978595b4",
            "Mirrors": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FMirrors.png?alt=media&token=02ed44ff-a292-41e0-af24-5e188766919a" ,
            "Windows": "img",
            "New bump marks": "img",
            "Seats": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSeats.png?alt=media&token=a5db2a95-881b-4839-9713-e5726f1666bc",
            "Steps": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSteps.png?alt=media&token=8091d69c-4539-4d25-be1a-bfac93eeb7af" , 
            "Screen wiper": "img",
            "Air conditioner": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FAir%20conditioner.png?alt=media&token=b2c68ea5-5bb5-4b66-b44a-311617723521" , 
            "Load chart": "img",
            "Oil level": "img",
            "Coolant level": "img",
            "Radiator not clogged": "img",
            "Hydraulic oil": "img",
        },

        classC: {
            "Steps": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSteps.png?alt=media&token=8091d69c-4539-4d25-be1a-bfac93eeb7af" , 
            "Recent body damage": "img"
        },

        "Other attachments": {
            classA: {
                "Hook safety latch": "img",
                "Outriggers": "img",
                "Pins in position and locked": "img",
                "Levers & joysticks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FLevers%20%26%20joysticks.png?alt=media&token=2d376604-a898-4915-9021-e78825fa7675",
            }
        },

        "Red permit area": {
            classA: {
                "Brake test ramp when entering pit": "img",
                "Radio two way": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FTwo%20way%20radio.png?alt=media&token=7c661eb5-01a8-44bb-a513-1b2a2b98ba2b" , 
                "Flag": "img"
            },
            classB: {
                "Reflective tape": "img"
            }
        }
    },

    hro: {
        classA:{
            "Safety glasses": "img" ,
            "Gloves": "img" ,
            "Hard hat": "img" ,
            "Overall": "img" ,
            "Safety shoes": "img" ,
            "Reflective vest": "img" ,
            "Dust mask": "img" ,
            "Ear plugs": "img" ,
            "Engine oil": "img" ,
            "Compressor oil": "img" ,
            "Hydraulic oil": "img" ,
            "Lubricator oil": "img" ,
            "Radiator water": "img" ,
            "Shank Adapter thread": "img" , 
            "Fire extinguisher": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FFire%20extinguisher.png?alt=media&token=9c364d87-a260-4f7d-bf5b-38a6cf60857a" , 
            "Rod changer-secure":"img" ,
            "Rod changer- bolts secure":"img" ,
        },  
        classB: {
            "Hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHooter.png?alt=media&token=017f6674-c65b-4f36-a6bd-c42239866d88" ,
            "Reverse alarm": "img" ,
            "Seat check": "img" ,
            "Lights-beacon": "img" ,
            "Lights-drilling": "img" ,
            "Lights-tramming": "img" , 
            "Air cleaner-indicator": "img" ,
            "Air cleaner-dust bowls": "img" , 
            "Cooler and radiator-clean": "img" ,
            "Cooler and radiator-leaking": "img" ,
            "Cooler and radiator-hoses not working": "img" ,
            "Gauges": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FGauges.png?alt=media&token=efba8ff9-7321-42d4-87d4-a3c57b234a86",
            "Battery-not-clean" : "img" ,
            "Battery-clamp tightness problem": "img" ,
            "Central levers-drilling": "img" ,
            "Central levers-feed" : "img" ,
            "Central levers-tramming": "img" ,
            "Central levers-oscillating lock": "img" ,
            "Central levers-rod changer": "img" ,
            "Undercarriage-track chain tension issue": "img" ,
            "Undercarriage-track chain condition": "img" ,
            "Undercarriage-track rollers": "img" ,
            "Undercarriage-oil leaks": "img" ,
            "Safety guards": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FEquipment%20safety%20guards.png?alt=media&token=ac8e4d00-680c-4444-a1a2-37be71096bba", 
            "Air hoses- air leaks and wear": "img" ,
            "Hydraulic hoses- oil leaks and wear": "img" ,
            "Dust collector-suction hose": "img" ,
            "Dust collector - dust hood discs": "img" ,
            "Dust collector- dust collector housing": "img" ,
            "V-belts-tension": "img" ,
            "V-belts-condition": "img" ,
            "Mast-feed chain": "img" ,
            "Mast- hoses": "img" ,
            "Mast-cracks": "img" ,
            "Rod changer-worn pins and bushes": "img"
        }, 
        classC: {
            "Mast-drifter slids": "img" ,
            "Mast-jawliners": "img" ,
            "Mast-dust hood": "img" ,
            "Mast-hydraulic cyclinders": "img" , 
            "Operator cab-windscreens": "img"
        },
    },
    
    bus: {
        classA:{
            "Licence disk and public permit": "img" , 
            "Number plate and lights": "img" ,
            "Windscreen and wipers": "img" ,
            "Interior lights": "img" ,
            "Fuel gauge": "img" ,
            "Seat condition": "img" ,
            "Safety belts": "img" ,
            "Test- steering and emergency steer": "img" ,
            "All light fittings and reflectors": "img" ,
            "Test headlamps- dim and bright": "img" , 
            "Indicator/rear/brake lights": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FRear%20lights.png?alt=media&token=11bbfab6-2e31-4f46-b6be-524addc05a90" ,
            "Test hazard lights": "img" , 
            "Test hooters": "img" ,
            "Test reverse alarm": "img" , 
            "Danger triangles": "img" ,
            "Fire extinguisher": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FFire%20extinguisher.png?alt=media&token=9c364d87-a260-4f7d-bf5b-38a6cf60857a" , 
            "Service brake test": "img" , 
            "Park brake test": "img" , 
            "Emergency brakes test": "img" ,
            "Tyre condition": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FTyres.png?alt=media&token=e86b0300-1409-40a5-b6a5-5f51d95819d3" ,
            "Rim and components": "img" , 
            "Wheel nuts": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FWheel%20nuts.png?alt=media&token=6276be15-c7bc-4795-84a9-7c80dbd6d3b0" , 
            "Stop blocks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FStop%20blocks.png?alt=media&token=23f443fa-7624-4795-8220-8edb35705b35" , 
            "Engine oil level": "img" ,
            "Fluid level": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FFluid%20images.png?alt=media&token=75a339f6-e178-4eff-8d02-5fffaa51b739",
            "Hydraulic oil level": "img" ,
            "Steering oil level": "img" ,
            "Transmission oil level": "img" ,
            "Radiator water level and leaks": "img" ,
            "Oil/fuel leaks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOil%20leak.png?alt=media&token=2d443594-f759-413a-956a-2aec978595b4"
        }, 
        "At night": {
            classA: {
                "Reflector tape that's visible": "img" ,
            } 
    }, 
    classB: {
        "Rear window and side windows": "img" ,
        "Gauges": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FGauges.png?alt=media&token=efba8ff9-7321-42d4-87d4-a3c57b234a86",
        "Adjust cabin rear view and other mirror": "img" ,
        "Ensure no lose objects in cabin": "img" , 
        "Wheel spanner, jack and lever": "img" ,
        "Spare wheel condition": "img" ,
        "Body parts and hinges": "img" ,
        "V-belts": "img" ,
        "Air conditioner": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FAir%20conditioner.png?alt=media&token=b2c68ea5-5bb5-4b66-b44a-311617723521" , 
        "Drain air reservoir": "img" ,
        "Battery clamps and terminals condition": "img" ,
        "Steps and handrails": "img"
    } ,
},

    "TLB": {
        classA: {
            "Operator licence": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOperator%20license.png?alt=media&token=75b2b887-8384-487b-946a-2d251e586089", 
            "Stop blocks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FStop%20blocks.png?alt=media&token=23f443fa-7624-4795-8220-8edb35705b35" , 
            "Indicator/rear/brake lights": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FRear%20lights.png?alt=media&token=11bbfab6-2e31-4f46-b6be-524addc05a90" ,
            "Strobe light": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FStrobe%20light.png?alt=media&token=800346f1-2b02-4765-8a4e-a6f98ec0755b" , 
            "Mirrors": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FMirrors.png?alt=media&token=02ed44ff-a292-41e0-af24-5e188766919a" ,
            "Dashboard warning lights": "img",
            "Hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FHooter.png?alt=media&token=017f6674-c65b-4f36-a6bd-c42239866d88" , 
            "Reverse hooter": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FReverse%20hooter.png?alt=media&token=55c29d3a-0cf0-4548-81b6-f1261fa806c9" ,
            "Steer control": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSteering.png?alt=media&token=78bbb22e-8142-44f2-8aa9-7325859e6451" ,
            "Brakes tested": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FBrakes.png?alt=media&token=c35871de-2292-4e3c-86d8-0599d4a32b8e" ,
            "Key control/proxy": "img",
            "Fire extinguisher": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FFire%20extinguisher.png?alt=media&token=9c364d87-a260-4f7d-bf5b-38a6cf60857a" , 
            "Gauges": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FGauges.png?alt=media&token=efba8ff9-7321-42d4-87d4-a3c57b234a86",
            "Wheel nuts": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FWheel%20nuts.png?alt=media&token=6276be15-c7bc-4795-84a9-7c80dbd6d3b0" , 
            "Tyre condition": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FTyres.png?alt=media&token=e86b0300-1409-40a5-b6a5-5f51d95819d3" ,
            "Controls": "img",
            "Park brake": "img",
            "Isolation point": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FIsolation%20point.png?alt=media&token=66d56be2-bf90-4e17-817d-fbee2f3ea201" ,
            "Air conditioner": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FAir%20conditioner.png?alt=media&token=b2c68ea5-5bb5-4b66-b44a-311617723521" , 
            "Radio two way": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FTwo%20way%20radio.png?alt=media&token=7c661eb5-01a8-44bb-a513-1b2a2b98ba2b" , 
        },
        classB: {
            "Digging boom assembly": "img",
            "Bucket and cutting edges": "img",
            "Oil/fuel leaks": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FOil%20leak.png?alt=media&token=2d443594-f759-413a-956a-2aec978595b4",
            "Windows": "img",
            "Out riggers": "img",
            "New bump marks": "img",
            "Tow bar & pin": "img",
            "Reflective tape condition": "img",
            "All pipes": "img",
            "Screen wiper": "img",
            "Fuel level": "img",
            "Doors & handles": "img",
            "Seats": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSeats.png?alt=media&token=a5db2a95-881b-4839-9713-e5726f1666bc",
            "Steps": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSteps.png?alt=media&token=8091d69c-4539-4d25-be1a-bfac93eeb7af" , 
            "Rear lights": "img",
        },
        classC: {
            "Steps": "https://firebasestorage.googleapis.com/v0/b/shiftreporter-3420e.appspot.com/o/images%2FSteps.png?alt=media&token=8091d69c-4539-4d25-be1a-bfac93eeb7af" , 
            "Recent body damage": "img"
        }
    }
}

export default checklistData;