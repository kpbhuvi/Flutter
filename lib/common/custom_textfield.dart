import 'package:flutter/material.dart';

class customTextField extends StatelessWidget {
  final TextEditingController Controller;
  final String hintText;
  const customTextField({super.key, required this.Controller, required this.hintText});

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      controller: Controller,
      decoration: InputDecoration(
        hintText: hintText ,
        border: const OutlineInputBorder(
           borderSide: BorderSide(
          color: Colors.black38,
        )
        ),
        enabledBorder: const OutlineInputBorder(
          borderSide: BorderSide(
            color: Colors.black38,
          )
        )
      ),
    validator: (val)
    {

    },

    );
  }
}