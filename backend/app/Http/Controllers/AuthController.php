<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\VerificationCode;
use App\Mail\VerificationCodeMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    // ===== LOGIN & LOGOUT (ma tbdelhomch) =====
    
    public function login(Request $request) { /* ... */ }
    public function logout(Request $request) { /* ... */ }

    // ===== REGISTER JDID - ysifet code =====

    /**
     * Step 1: User y3amer form w ysifet code
     */
    public function registerSendCode(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Check ila email deja kayn f verification
        $existingUser = User::where('email', $request->email)->first();
        if ($existingUser) {
            return response()->json([
                'message' => 'Cet email est déjà utilisé'
            ], 422);
        }

        // Generer code
        $code = str_pad(random_int(0, 999999), 6, '0', STR_PAD_LEFT);

        // Supprimer codes 9dam
        VerificationCode::where('email', $request->email)->delete();

        // Creer code jdid
        VerificationCode::create([
            'email' => $request->email,
            'code' => $code,
            'expires_at' => now()->addMinutes(10)
        ]);

        // Sifet email b code
        try {
            Mail::to($request->email)->send(new VerificationCodeMail($code));
            
            return response()->json([
                'success' => true,
                'message' => 'Code envoyé avec succès',
                'email' => $request->email
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erreur lors de l\'envoi de l\'email'
            ], 500);
        }
    }

    /**
     * Step 2: Verifier code w creer compte
     */
    public function registerVerify(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:6',
            'code' => 'required|string|size:6'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Verifier code
        $record = VerificationCode::where('email', $request->email)
            ->where('code', $request->code)
            ->where('expires_at', '>', now())
            ->first();

        if (!$record) {
            return response()->json([
                'verified' => false,
                'message' => 'Code invalide ou expiré'
            ], 400);
        }

        // Supprimer code
        $record->delete();

        // Creer user
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => 'user',
            'email_verified_at' => now()
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'success' => true,
            'message' => 'Inscription réussie !',
            'user' => $user,
            'token' => $token
        ]);
    }

    /**
     * Verifier code (l-7a9i9i - bila creer compte)
     */
    public function verifyCode(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'code' => 'required|string|size:6'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $record = VerificationCode::where('email', $request->email)
            ->where('code', $request->code)
            ->where('expires_at', '>', now())
            ->first();

        if (!$record) {
            return response()->json([
                'verified' => false,
                'message' => 'Code invalide ou expiré'
            ], 400);
        }

        return response()->json([
            'verified' => true,
            'message' => 'Code vérifié'
        ]);
    }
}